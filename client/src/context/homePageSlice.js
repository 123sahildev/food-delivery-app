import { createSlice } from "@reduxjs/toolkit";

const homePageSlice = createSlice({
    name : "homeSlice",
    initialState : { profileNav : true},
    reducers : {
        showProfile (state, action) {
            state.profileNav = !state.profileNav;
        }
    }
});

export const { showProfile } = homePageSlice.actions;
export default homePageSlice.reducer;