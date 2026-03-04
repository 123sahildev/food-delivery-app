import { useState, useEffect, useRef } from "react"
import Hero from '../assets/hero2.jpg'
import Header from "../components/header.jsx"


export default function home() {
  return (
    <>
    <Header />
    <img src={Hero} alt="hero" className="w-full h-screen absolute top-0 left-0" />
    <div className="absolute left-30 top-40 not-last:">
      <h1 className="font-[system-ui] font-bold w-150 text-white text-[40px] ">Fresh Food, Delivered Fast Order your favorite meals anytime</h1>
      <button className="border-none font-[Arial] font-bold cursor-pointer outline-none text-[20px] text-white bg-[#ff9900] h-10 rounded-[10px] mt-2 px-4">order now</button>
    </div>
    </>
  )
}
