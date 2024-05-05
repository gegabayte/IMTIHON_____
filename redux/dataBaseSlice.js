import { createSlice } from "@reduxjs/toolkit"

    const initialState = {
        value : []
    }

const dataBaseSlice = createSlice({
    name: 'dataBase',
    initialState,
    reducers: {
        data_add: (state , actions) => {
            let copy = JSON.parse(JSON.stringify(state.value))
            copy.push(actions.payload)
            state.value = copy;
        },
        data__del: (state) => {
            state.value = [];
        }
    }
})


export const {data_add, data__del} = dataBaseSlice.actions;
export default dataBaseSlice.reducer;