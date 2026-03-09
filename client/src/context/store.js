import { configureStore } from "@reduxjs/toolkit";
import userProfileSlicer from "../context/slice.userProfile.js";

export const Store = configureStore({
    reducer : {
        userProfile : userProfileSlicer
    }
});