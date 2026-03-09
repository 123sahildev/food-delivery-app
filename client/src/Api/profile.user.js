import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userRegisterThunk } from './thunks/userFormThunk';

export const userProfileThunk = createAsyncThunk(
    "profileUser",
    async () => {
        let token = localStorage.getItem("token");
        let response = await axios.get("http://localhost:3000/user/profile",
            {
                header : {
                    Autorization : `Bearer ${token}`
                }
            }
        );
        
        console.log("user profile request :", response.data.message);
    }
);


export const userRegister = createAsyncThunk(
    "user/userRegister",
    async (data) => {
        return userRegisterThunk(data)
    }
)