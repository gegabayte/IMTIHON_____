import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    value : 1,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state , actions) => {
            state.value += actions.payload
        },
        decrement: (state , actions) => {
            state.value -= actions.payload
        },
        counter__del: (state) => {
            state.value = 1
        }
    }
})

export const {increment, decrement , counter__del} = counterSlice.actions;
export default counterSlice.reducer;