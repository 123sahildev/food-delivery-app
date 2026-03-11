import { createSlice } from "@reduxjs/toolkit"
import { userProfileThunk, userRegister } from "../Api/form.users.js"

const userProfileSlice = createSlice({
    name : "userProfile",
    initialState : { data : [], loaders : { registerLoader : true, loginLoader : true}},
    reducers : {
        simple (state) {
            console.log("chal raha ahi");
        }
    },

    extraReducers : (builder) => {
        builder
        .addCase(userProfileThunk.pending, (state, action) => {
            console.log("function is pending");
        })
        .addCase(userProfileThunk.fulfilled, (state, action) => {
            console.log("functon is fulfilled")
        })
        .addCase(userProfileThunk.rejected, (state, action) => {
            console.log("function got a error")
        })

        .addCase(userRegister.pending, (state, action) => {
            console.log("user register is on pending")
        })
        .addCase(userRegister.fulfilled, (state, action) => {
            console.log("user register is on fulfilled!", action.payload)
        })
        .addCase(userRegister.rejected, (state, action) => {
            console.log("user register is been rejected")
        })
    } 
});

export const { simple } = userProfileSlice.actions;
export default userProfileSlice.reducer;