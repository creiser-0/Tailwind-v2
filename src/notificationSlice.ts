import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { iNotification } from "./contexts/notificationContext";
import { RootState } from "./store";

export interface iNotificationState {
    notificationList: iNotification[];
}

const initialState: iNotificationState = { notificationList: [] };

export const notificationSlice = createSlice({
    name: "notificationList",
    initialState,
    reducers: {
        addNotification: (state, action: PayloadAction<iNotification>) => {
            state.notificationList.push(action.payload);
        },
        deleteNotification: (state, action: PayloadAction<number>) => {
            state.notificationList.splice(action.payload, 1);
        },
        addMultipleNotification: (
            state,
            action: PayloadAction<iNotification[]>
        ) => {
            state.notificationList.concat(action.payload);
        },
        deleteAllNotifications:(state)=>{
            state.notificationList = []
        }
    },
});

export const { addNotification, deleteNotification, addMultipleNotification, deleteAllNotifications} =
    notificationSlice.actions;

export const selectNotificationList = (state: RootState) =>
    state.notifications.notificationList;

export default notificationSlice.reducer;
