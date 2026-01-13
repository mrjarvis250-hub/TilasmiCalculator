import calculateSlice  from "./action-creaters/calculateSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        calculator:calculateSlice
    }
})

