import { configureStore } from "@reduxjs/toolkit";
import systemSlice from './slices/systemSlice'
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: {
        system: systemSlice
    }
})

export const useAppDispatch = () => useDispatch()

export default store