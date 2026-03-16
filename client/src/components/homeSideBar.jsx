import Hero2 from "../assets/hero4.jpg"
import { useState, useEffect, useRef } from "react"
import NavBarClose from "../assets/svgs/navClose";

export default function homeSideBar({ isProfileBar, setProfileBar }) {
  return (
    <div onClick={() => setProfileBar(false)} className={`absolute transition-all duration-300 left-0 w-full h-screen bg-[#00000083] ${!isProfileBar && "hidden"}`}>
        <div className={`w-50 absolute transition-all duration-300 left-0 flex flex-col bg-white top-0 h-screen ${isProfileBar ? "translate-x-0" : "-translate-x-100"}`}>
        
        <div className="mt-2 flex flex-col items-center justify-items-center">
            <img src={Hero2} alt="" className="w-30 h-30 rounded-[50%] " />
            <p className="text-[12px] mt-1">123sahilzahoor404</p>
        </div>
        <NavBarClose onClick={() => setProfileBar(false)} className="w-6 cursor-pointer rounded-2xl h-6 p-1 duration-200 bg-[#2525252c] hover:text-[red] text-[black] hover:bg-[#18181823] absolute right-2 top-2" />
        </div>
    </div>
  );
}


