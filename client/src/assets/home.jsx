import { useState, useEffect, useRef } from "react"
import Hero from '../assets/hero2.jpg'
import Header from "../components/header.jsx"


export default function home() {
    const word = 'Fresh Food, Delivered Fast Order your favorite meals anytime'
    const [title, setTitle] = useState('Fresh Food, Delivered Fast Order your favorite meals anytime')

  // useEffect(() => {
  //   let index = 0;
  
  //   let intervel = setInterval(() => {
  //     setTitle(prev => prev + word[index]);
  //     index++;
      
  //   }, 100);

  //   if (index === word.length) {
  //     console.log("chal raha haun main");
      
  //     return () => {
  //       clearInterval(intervel);
  //     }
  //   }

  //   return () => {
  //     clearInterval(intervel);
  //   };

  // }, []);

  return (
    <>
    <img src={Hero} alt="hero" className="w-full h-screen absolute top-0 left-0" />
    <div className="absolute left-30 top-40 not-last:">
      <h1 className="font-[system-ui] font-bold w-150 text-white text-[40px] ">{title}|</h1>
      <button className="btn-bounce border-none font-[Arial] font-bold cursor-pointer outline-none text-[20px] text-white bg-[#ff7b00] h-10 rounded-[7px] mt-2 px-4 ">order now</button>
    </div>
    <Header />
    </>
  )
}
