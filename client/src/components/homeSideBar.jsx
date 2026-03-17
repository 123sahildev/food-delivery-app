import Hero2 from "../assets/hero4.jpg"
import { useState, useEffect, useRef } from "react"
import NavBarClose from "../assets/svgs/navClose";
import userProfileSlice from "../context/userFormSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../context/userFormSlice.js";
import axios from "axios";

export default function homeSideBar({ isProfileBar, setProfileBar }) {
    const userData = useSelector((state) => state.userProfileSlice.user);
    const dispatch = useDispatch();
    const closeNarBar = () => {
        setProfileBar(false);
    }

    const logoutApi = async () => {
        setProfileBar(false);
        dispatch(logoutUser())
        let response = await axios.post("http://localhost:3000/api/users/logout",
          {},
          {
            withCredentials: true
          }
        );

        console.log("logout response data :", response.data)
        
    }

  return (
      <>
        {isProfileBar && <div onClick={closeNarBar} className={`absolute transition-all duration-300 left-0 w-full h-screen bg-[#00000083] `}></div>}
        <div className={`w-50 absolute transition-all duration-400 left-0 flex flex-col bg-white top-0 h-screen ${isProfileBar ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-100"}`}>
          <div className="mt-2 flex flex-col items-center justify-items-center">
            <img src={Hero2} alt="" className="w-30 h-30 rounded-[50%] " />
            <p className="text-[12px] mt-1">{userData.username}</p> 
          </div>
          <NavBarClose onClick={closeNarBar} className="w-6 cursor-pointer rounded-2xl h-6 p-1 duration-200 bg-[#2525252c] hover:bg-[#ff0800b9] text-[#2c2c2c] hover:text-[#fdfdfd] absolute right-2 top-2" />
        <button onClick={logoutApi} className="text-[red] text-[18px] w-auto px-10 outline-1 outline-[red] rounded-md py-1 cursor-pointer  font-[Arial] absolute bottom-5  self-center items-center ">Log out</button>
        </div>
      </>
  );
}


