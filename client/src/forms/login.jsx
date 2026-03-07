import { useState, useEffect } from "react";
import gsap from "gsap";
import { useForm } from "react-hook-form";
import EmailIcon from "../assets/svgs/email";
import PasswordIcon from "../assets/svgs/password";
import PasswordShow from "../assets/svgs/passwordShow";

export default function login({ setRegister, setLogin }) {
    const { register, handleSubmit, formState : { errors }, reset } = useForm();
    const [password, setPassword] = useState(true);

    const submit = async (data) => {
        console.log(data);
    }


  return (
    <div onClick={() => setLogin(false)} className="w-screen absolute top-0 left-0 flex h-screen bg-[#0f0f0fcc]">
        <form onClick={(e) => e.stopPropagation() } onSubmit={handleSubmit(submit)} className="rounded-[5px] flex flex-col px-5 py-4 self-center bg-white mx-auto">
            <div className="mt-1 flex flex-col justify-self-center items-center gap-0 max-h-min">
                <h1 className="text-[20px] h-6">Welcome back!</h1>
                <small className="text-[12px] text-[darkorange] self-center">Login your account</small>
            </div>
            <div className="flex flex-col w-min h-auto mt-2 align-middle justify-self-center">
                <label htmlFor="email">Email</label>
                <div className="rounded-[5px] flex flex-row items-center outline outline-[darkorange]">
                    <EmailIcon className="text-[darkorange] w-5 h-5 ml-1" /> 
                    <input {...register("email")}
                    type="email" 
                    id="email"
                    className="w-62 h-8 px-2 border-none outline-none text-[15px]"/>
                </div>
            </div>
            <div className="flex mt-2 flex-col w-min h-auto self-center ">
                <label htmlFor="password">Password</label>
                <div className="rounded-[5px] items-center flex flex-row outline outline-[darkorange]">
                    <PasswordIcon className="w-5 h-5 text-[darkorange] ml-1" />
                    <input {...register("password")} 
                    type={password ? "password" : "text"}
                    id="password" 
                    className="w-55 h-8 px-2 border-none outline-none text-[15px]"/>
                    <PasswordShow onClick={() => setPassword(!password)} className="w-6 transition-all duration-300 hover:bg-[#42424211] h-6 mr-1 text-[#303030] rounded-[50%] cursor-pointer p-1 " />
                </div>
            </div>
            <div className="flex flex-row mt-2">
                <input type="checkbox" {...register("rememberMe")} />
                <label className="text-[13px] ml-1">Remember me</label>
            </div>
            <button type="submit" className="mt-4 rounded-2xl bg-[#111111] cursor-pointer text-white font-bold hover:outline hover:outline-[darkorange] justify-self-center w-full h-9 border-none">Login</button>
            <div className="flex flex-row self-center mt-3">
                <p className="text-[13px]">Already have an account?</p>
                <p onClick={() => {
                    setLogin(false)
                    setRegister(true)
                }} className="ml-1 text-[darkorange] text-[12px] h-4 cursor-pointer hover:border-b hover:border-[darkorange]">Register</p>
            </div>
        </form>
    </div>
  );
}
