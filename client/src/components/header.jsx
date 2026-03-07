import { useEffect, useState, useRef } from "react";
import Logo from '../assets/logo.jsx'
import Cart from '../assets/svgs/cart.jsx'
import Search from "../assets/svgs/search.jsx";
export default function header({setRegister, setLogin}) {



  return (
    <div className="absolute top-0 left-0 w-full h-17 flex flex-row items-center justify-center gap-4">
      <Logo  className="absolute self-center left-3 translate-y-2 w-25 h-25 " />
      <div className=" group cursor-pointer absolute items-center justify-center right-10 self-center">
        <p className="justify-self-center trasform translate-x-1 font-bold absolute text-[20px] font-[Arial] text-[#ffe600]">0</p>
        <Cart className="group-hover:text-[#efeeee] self-center h-16 w-16 text-white" />
      </div>
      <h1 className=" hover:text-[yellow] text-white font-[Arial] text-[18px] px-2 hover:border-b hover:border-white  cursor-pointer  py-1">Home</h1>
      <h1 className=" hover:text-[yellow] text-white font-[Arial] text-[18px] px-2 hover:border-b hover:border-white cursor-pointer  py-1">Menu</h1>
      <h1 className=" hover:text-[yellow] text-white font-[Arial] text-[18px] px-2 hover:border-b hover:border-white cursor-pointer  py-1">Contact</h1>
      <button className="cursor-pointer absolute right-90 p-2 transition-all duration-300 hover:bg-[#ffc80239] rounded-[50%] flex items-center justify-items-center ">
      <Search className="text-white w-6 h-6 self-center  " />
      </button>
      <div className="flex items-center absolute right-40 gap-3">
        <button onClick={() => setLogin(true)} className="font-[Arial] text-[16px] text-white px-4 py-1 rounded-[5px] outline outline-[#ff9900] border-none transition-all duration-300  hover:shadow-[0px_0px_3px_1px_rgb(255,153,0)] hover:text-[#fff45a] hover:outline-2 cursor-pointer">Login</button>
        <button onClick={() => setRegister(true)} className="font-[Arial] text-[16px] text-white py-1 rounded-[5px] hover:bg-[#ff8800] bg-[rgb(255,153,0)] transition-all duration-300 px-4 border-none cursor-pointer ">Sign up</button>
      </div>
    </div>
    
  );
}
