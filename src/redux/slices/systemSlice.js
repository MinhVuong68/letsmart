import { createSlice }  from "@reduxjs/toolkit";

const initialState = {
    logo: '',
    title: '',
    hotline: '',
}

const systemSlice = createSlice({
    name: "system",
    initialState: initialState,
    reducers: {
        setSystem: (state, action) => {
            return action.payload
        }
    }
})

export const {
    setSystem
} = systemSlice.actions

export default systemSlice.reducer