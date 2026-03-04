import { useEffect, useState, useRef } from "react";
import Logo from '../assets/logo.jsx'
import Cart from '../assets/icons/cart.jsx'
export default function header() {
  return (
    <div className="absolute top-0 left-0 w-full h-17 flex flex-row items-center justify-center gap-4">
      <Logo  className="absolute self-center left-20 w-15 h-15 " />
      <div className=" cursor-pointer absolute items-center justify-center right-10 self-center">
        <p className="justify-self-center trasform translate-x-1 font-bold absolute text-[20px] font-[Arial] text-[#ff9900]">0</p>
        <Cart className=" self-center h-16 w-16 text-white" />
      </div>
      <h1 className="text-white font-[Arial] text-[18px] px-2 hover:border-b hover:border-white  cursor-pointer  py-1">Home</h1>
      <h1 className="text-white font-[Arial] text-[18px] px-2 hover:border-b hover:border-white cursor-pointer  py-1">Menu</h1>
      <h1 className="text-white font-[Arial] text-[18px] px-2 hover:border-b hover:border-white cursor-pointer  py-1">Contact</h1>
      <div className="flex items-center absolute right-45 gap-3">
        <button className="font-[Arial] text-[16px] text-white px-4 py-1 rounded-[5px] outline outline-[#ff9900] border-none">Login</button>
        <button className="font-[Arial] text-[16px] text-white py-1 rounded-[5px] bg-[#ff9900]  px-4 border-none ">Sign up</button>
      </div>
    </div>
    
  );
}
