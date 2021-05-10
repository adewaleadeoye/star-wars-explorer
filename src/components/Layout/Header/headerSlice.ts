import {createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeaderTitle {
    headerTitle?:string,
}
interface BackButtonValue {
    backTo?: string
}

type headerState = HeaderTitle & BackButtonValue

type headerReducer = {
    headerReducer: headerState
}

let initialState:headerState = {
    headerTitle: undefined,
    backTo: undefined
}

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setHeaderTitle(state, action:PayloadAction<HeaderTitle>){
            const {headerTitle} = action.payload
            state.headerTitle = headerTitle
        },
        setBackButtonValue(state, action:PayloadAction<BackButtonValue>){
            const {backTo} = action.payload
            state.backTo = backTo
        },
    }
})

export const {setHeaderTitle, setBackButtonValue} = headerSlice.actions

export const getHeaderTitle = ({headerReducer}:headerReducer) => headerReducer.headerTitle
export const getBackButtonValue = ({headerReducer}:headerReducer) => headerReducer.backTo

export default headerSlice.reducer