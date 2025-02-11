import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        sidebarToggle: true,
    },

    reducers: {
        handleSidebarToggleReducer: (state) => {
            state.sidebarToggle = !state.sidebarToggle;
        }
    },
});

export const {handleSidebarToggleReducer} = appSlice.actions;
export default appSlice.reducer;