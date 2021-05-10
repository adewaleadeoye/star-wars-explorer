import {createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPeople, fetchPerson } from "../../api/peopleApi";
import { Loading } from "../../utils/types";
import { setAlert } from "../Alert/alertSlice";

export interface Person {
    name?: string,
    height?: number,
    mass?: number,
    hair_color?: string,
    skin_color?: string,
    gender?: string,
    birth_year?: string,
    generated_id?: number,
}

export interface People {
    people: Array<Person>
}

interface CurrentPerson {
    person?: Person,
}

interface PeoplePageCount {
    pages: number,
}

type peopleState = PeoplePageCount & People & CurrentPerson & Loading

type peopleReducer = {
    peopleReducer: peopleState
}

export const getPersonData = createAsyncThunk('people/getPersonData', async (personId: number, {dispatch}) => {
    try {
        const person = await fetchPerson(personId)
        return {person}
    } catch (error) {
        dispatch(setAlert({open: true, content: "Error: Could not load information for the character", severity: "error"}))
        console.log(error)
    }
})

export const getPeopleList = createAsyncThunk('people/getPeopleList', async (page: number, {dispatch}) => {
    try {
        const {people, pages} = await fetchPeople(page)
        dispatch(setPeople({people}))
        dispatch(setPageCount({pages}))
        return
    } catch (error) {
        dispatch(setAlert({open: true, content: "Error: Could not fetch list of star wars characters", severity: "error"}))
        console.log(error)
    }
})

let initialState: peopleState = {
    pages: 0,
    people: [],
    person:{},
    loading: false
}

const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        setPeople(state, action: PayloadAction<People>){
            state.people = action.payload.people
        },
        setPerson(state, action:PayloadAction<CurrentPerson>){
            state.person = action.payload.person
        },
        setPageCount(state, action:PayloadAction<PeoplePageCount>){
            state.pages = action.payload.pages
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPersonData.pending, (state) => {
            state.loading = true
        })
        .addCase(getPersonData.fulfilled, (state, action) => {
            state.loading = false
            state.person = action.payload?.person
        })
        .addCase(getPersonData.rejected, (state, action) => {
            state.loading = false
        })
        .addCase(getPeopleList.pending, (state) => {
            state.loading = true
        })
        .addCase(getPeopleList.fulfilled, (state) => {
            state.loading = false
        })
        .addCase(getPeopleList.rejected, (state) => {
            state.loading = false
        })
    }
})

export const {setPeople, setPerson, setPageCount} = peopleSlice.actions

export const listPeople = ({peopleReducer}:peopleReducer) => peopleReducer.people || []
export const displayPerson = ({peopleReducer}:peopleReducer) => peopleReducer.person || {}
export const pageCount = ({peopleReducer}:peopleReducer) => peopleReducer.pages
export const loadingStatus = ({peopleReducer}:peopleReducer) => peopleReducer.loading

export default peopleSlice.reducer

