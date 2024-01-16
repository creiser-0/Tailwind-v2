import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { iNotification } from "./contexts/notificationContext";
import { RootState } from "./store";

export interface iNotificationState {
    notification: iNotification | undefined;
}

const initialState: Partial<iNotificationState> = { notification: undefined };

export const notificationSlice = createSlice({
    name: "notificationList",
    initialState,
    reducers: {
        addNotification: (state, action: PayloadAction<iNotification>) => {
            state.notification = action.payload;
            
        },
        deleteNotification: (state ) => {
            state.notification = initialState.notification;
        },
    },
});

export const { addNotification, deleteNotification } =
    notificationSlice.actions;

export const selectNotificationList = (state: RootState) =>
    state.notifications.notification;

export default notificationSlice.reducer;
