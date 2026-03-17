import { createSlice } from "@reduxjs/toolkit"
import { userProfileThunk, userRegister } from "../Api/form.users.js"

const userProfileSlice = createSlice({
    name : "userProfileSlice",
    initialState : { data: [], user: { status: false, username: "", email: ""}, loaders: { registerLoader: true, loginLoader: true}},
    reducers : {
        setUserProfile (state, action) {
            if (!action.payload.userAccess) {
                state.user.status = false;
                return
            }
            state.user.status = true;
            state.user.username = action.payload.data.username;
            state.user.email = action.payload.data.email;
        },
        logoutUser (state, action) {
            state.user.status = false;
            state.user.email = "";
            state.user.username = "";
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

export const { setUserProfile, logoutUser } = userProfileSlice.actions;
export default userProfileSlice.reducer;