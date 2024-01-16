import { configureStore } from "@reduxjs/toolkit";
import notificationSlice from "./notificationSlice";

const store = configureStore({
    reducer: {
        notifications: notificationSlice
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
