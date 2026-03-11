import axios from "axios";

export const userRegisterThunk = async (data) => {
    let response = await axios.post("http://localhost:3000/api/users/register", data)
    return response.data
}

export const userLoginThunk = async (data) => {
    // let response = await axios.get("http://localhost:3000/user/login",data);
    // console.log(response.data.message);
    // return response.data
}