import { createSlice } from "@reduxjs/toolkit";

export const calculateSlice = createSlice({
    name: 'calculator',
    initialState: { result: 0 },

    reducers: {
        add: (state, action) => {
            state.result = action.payload
        },

        substract: (state, action) => {
            state.result = action.payload
        },

        multiply: (state, action) => {
            state.result = action.payload
        },

        reset: (state) => {
            return state.result
        }
    }
})

export const { add, substract, multiply, reset } = calculateSlice.actions
export default calculateSlice.reducer