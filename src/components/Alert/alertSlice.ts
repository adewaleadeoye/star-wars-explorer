import {createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Alert {
    open:boolean,
    content?:string,
    severity?: "success" | "info" | "warning" | "error"
}

type alertState = Alert

type alertReducer = {
    alertReducer: alertState
}

let initialState:alertState = {
    open: false,
    content: undefined,
    severity: undefined
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setAlert(state, action:PayloadAction<Alert>){
            const {open, content, severity} = action.payload
            state.open = open
            state.content = content
            state.severity = severity
        }
    }
})

export const {setAlert} = alertSlice.actions

export const alertInfo = ({alertReducer}:alertReducer) => {return {...alertReducer}}

export default alertSlice.reducer