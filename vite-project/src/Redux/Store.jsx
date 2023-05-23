import { configureStore } from "@reduxjs/toolkit";
import CalSlice from "./CalSlice";
const Store = configureStore({
    reducer: { CalSlice }
})
export default Store