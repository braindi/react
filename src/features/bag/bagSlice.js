import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    arr: []
}
const bagSlice = createSlice({
    name: "bagSlice",
    initialState,
    reducers: {
        addBag: (state, action) => {
            
        },

        deleteBag: (state, action) => {

        }
    }
})