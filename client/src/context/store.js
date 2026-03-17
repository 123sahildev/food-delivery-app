import { configureStore } from "@reduxjs/toolkit";
import userFormSlice from "./userFormSlice";
export const Store = configureStore({
    reducer : {
        userProfileSlice : userFormSlice
    }
});