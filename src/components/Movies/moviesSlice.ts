import {createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMovie, fetchMovies } from "../../api/moviesApi";
import { Loading } from "../../utils/types";
import { setAlert } from "../Alert/alertSlice";

export interface Movie {
    title?: string,
    director?: string,
    producers?: string,
    release_date?: string,
    generated_id?: number,
}

export interface Movies {
    movies: Array<Movie>
}

interface SelectedMovie {
    movie?: Movie,
}

interface MoviesPageCount {
    pages: number,
}

type moviesState = MoviesPageCount & Movies & SelectedMovie & Loading

type moviesReducer = {
    moviesReducer: moviesState
}

export const getMovieData = createAsyncThunk('movies/getMovieData', async (movieId: number, {dispatch}) => {
    try {
        const movie = await fetchMovie(movieId)
        return {movie}
    } catch (error) {
        dispatch(setAlert({open: true, content: "Error: Could not load information for the selected movie", severity: "error"}))
        console.log(error)
    }
})

export const getMoviesList = createAsyncThunk('movies/getMoviesList', async (page: number, {dispatch}) => {
    try {
        const {movies, pages} = await fetchMovies(page)
        dispatch(setMovies({movies}))
        dispatch(setPageCount({pages}))
        return
    } catch (error) {
        dispatch(setAlert({open: true, content: "Error: Could not fetch list of movies", severity: "error"}))
        console.log(error)
    }
})

let initialState: moviesState = {
    pages: 0,
    movies: [],
    movie: {},
    loading: false
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies(state, action: PayloadAction<Movies>){
            state.movies = action.payload.movies
        },
        setMovie(state, action:PayloadAction<SelectedMovie>){
            state.movie = action.payload.movie
        },
        setPageCount(state, action:PayloadAction<MoviesPageCount>){
            state.pages = action.payload.pages
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getMovieData.pending, (state) => {
            state.loading = true
        })
        .addCase(getMovieData.fulfilled, (state, action) => {
            state.loading = false
            state.movie = action.payload?.movie
        })
        .addCase(getMovieData.rejected, (state, action) => {
            state.loading = false
        })
        .addCase(getMoviesList.pending, (state) => {
            state.loading = true
        })
        .addCase(getMoviesList.fulfilled, (state) => {
            state.loading = false
        })
        .addCase(getMoviesList.rejected, (state) => {
            state.loading = false
        })
    }
})


export const {setMovies, setMovie, setPageCount} = moviesSlice.actions

export const listMovies = ({moviesReducer}:moviesReducer) => moviesReducer.movies || []
export const displayMovie = ({moviesReducer}:moviesReducer) => moviesReducer.movie || {}
export const moviesPageCount = ({moviesReducer}:moviesReducer) => moviesReducer.pages
export const loadingStatus = ({moviesReducer}:moviesReducer) => moviesReducer.loading

export default moviesSlice.reducer

