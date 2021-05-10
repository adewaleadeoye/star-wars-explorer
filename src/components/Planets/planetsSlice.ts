import {createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPlanet, fetchPlanets } from "../../api/planetsApi";
import { Loading } from "../../utils/types";
import { setAlert } from "../Alert/alertSlice";

export interface Planet {
    title?: string,
    terrain?: string,
    population?: string,
    generated_id?: number,
}

export interface Planets {
    planets: Array<Planet>
}

interface SelectedPlanet {
    planet?: Planet,
}

interface PlanetsPageCount {
    pages: number,
}

type planetsState = PlanetsPageCount & Planets & SelectedPlanet & Loading

type planetsReducer = {
    planetsReducer: planetsState
}

export const getPlanetData = createAsyncThunk('movies/getPlanetData', async (planetId: number, {dispatch}) => {
    try {
        const planet = await fetchPlanet(planetId)
        return {planet}
    } catch (error) {
        dispatch(setAlert({open: true, content: "Error: Could not load information for the selected planet", severity: "error"}))
        console.log(error)
    }
})

export const getPlanetsList = createAsyncThunk('movies/getPlanetsList', async (page: number, {dispatch}) => {
    try {
        const {planets, pages} = await fetchPlanets(page)
        dispatch(setPlanets({planets}))
        dispatch(setPageCount({pages}))
        return
    } catch (error) {
        dispatch(setAlert({open: true, content: "Error: Could not fetch list of planets", severity: "error"}))
        console.log(error)
    }
})

let initialState: planetsState = {
    pages: 0,
    planets: [],
    planet: {},
    loading: false
}

const planetsSlice = createSlice({
    name: 'planets',
    initialState,
    reducers: {
        setPlanets(state, action: PayloadAction<Planets>){
            state.planets = action.payload.planets
        },
        setPlanet(state, action:PayloadAction<SelectedPlanet>){
            state.planet = action.payload.planet
        },
        setPageCount(state, action:PayloadAction<PlanetsPageCount>){
            console.log(action)
            state.pages = action.payload.pages
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPlanetData.pending, (state) => {
            state.loading = true
        })
        .addCase(getPlanetData.fulfilled, (state, action) => {
            state.loading = false
            state.planet = action.payload?.planet
        })
        .addCase(getPlanetData.rejected, (state, action) => {
            state.loading = false
        })
        .addCase(getPlanetsList.pending, (state) => {
            state.loading = true
        })
        .addCase(getPlanetsList.fulfilled, (state) => {
            state.loading = false
        })
        .addCase(getPlanetsList.rejected, (state) => {
            state.loading = false
        })
    }
})


export const {setPlanets, setPlanet, setPageCount} = planetsSlice.actions

export const listPlanets = ({planetsReducer}:planetsReducer) => planetsReducer.planets || []
export const displayPlanet = ({planetsReducer}:planetsReducer) => planetsReducer.planet || {}
export const planetsPageCount = ({planetsReducer}:planetsReducer) => planetsReducer.pages
export const loadingStatus = ({planetsReducer}:planetsReducer) => planetsReducer.loading

export default planetsSlice.reducer

