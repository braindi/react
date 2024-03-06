import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "../features/order/orderSlice.js";
import userSlice from "../features/user/userSlice.js";

export const store = configureStore({
    reducer: {
        cartOrders: orderSlice,
        thisUser: userSlice
    }
})