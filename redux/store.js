import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import dataBaseSlice from "./dataBaseSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        dataBase: dataBaseSlice
    }
})