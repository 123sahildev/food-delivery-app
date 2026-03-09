import { useState, useEffect, useRef } from "react"
import Hero from '../assets/hero2.jpg'
import Header from "../components/header.jsx"
import Hero2 from '../assets/hero3.jpg'
import Hero3 from '../assets/hero4.jpg'
import Hero5 from '../assets/hero5.jpg'
import Hero6 from '../assets/hero6.jpg'
import Register from '../forms/register.jsx';
import Login from "../forms/login.jsx"

export default function home() {
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const word = 'Fresh Food, Delivered Fast Order your favorite meals anytime'
    const [title, setTitle] = useState('Fresh Food, Delivered Fast Order your favorite meals anytime');
    const [isanimation, setAnimation] = useState(true);

  return (
    <>
    <img src={Hero} alt="hero" className="homeBackgroundImg bg-cover w-full h-full absolute top-0 left-0" />
    <div className="absolute left-20 top-40 ">
      <h1 className="font-[system-ui] font-bold gridentText w-150 text-[40px] ">{title}</h1>
      <button onMouseEnter={() => setAnimation(false)} onMouseLeave={() => setAnimation(true)} className={`${isanimation && "btn-bounce "} border-none font-[Arial] font-bold cursor-pointer outline-none text-[17px] text-white bg-[#ff7b00] h-9 rounded-[7px] mt-2 px-3`}>order now</button>
    </div>
    <Header setRegister={setRegister} setLogin={setLogin} />
    {register && <Register setRegister={setRegister} setLogin={setLogin} />}
    {login && <Login setRegister={setRegister} setLogin={setLogin} />}
    </>
  );
}
