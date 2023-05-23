import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    num: 0
}
const CalSlice = createSlice({
    name: "Arnab",
    initialState,
    reducers: {
        add: ((state) => {
            state.num = state.num + 1
        }),
        sub: ((state) => {
            state.num = state.num - 1
        })
    }
})
export default CalSlice.reducer
export const { add, sub } = CalSlice.actions