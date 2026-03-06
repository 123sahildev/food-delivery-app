import { useEffect, useState, useRef } from "react";
import { useForm } from 'react-hook-form'
import EmailIcon from "../assets/svgs/email.jsx";
import PasswordIcon from "../assets/svgs/password.jsx";
import ConfirmPassword from "../assets/svgs/confirmPassword.jsx";
import PasswordShow from "../assets/svgs/passwordShow.jsx";
import UserName from "../assets/svgs/username.jsx";
import GoogleIcon from "../assets/svgs/googleIcon.jsx";

export default function login() {
    const { register, handleSubmit, formState : { errors }, reset} = useForm();
    const [hidePassword, setHidePassword] = useState(true);

    const submit = (data) => {
        console.log(data);
        
    }

  return (
    <div className="flex absolute left-0 top-0  z-100 bg-[#131313a8] w-full h-full">
         <form onSubmit={handleSubmit(submit)} className=" px-5 py-3 flex flex-col bg-white rounded-[5px]  ">
            <div  className="shadow-[0px_0px_10px_2px_rgb(1, 0, 1)] justify-self-center mt-3 flex flex-col gap-0 items-center justify-items-center">
                <h1 className="text-[25px] inline h-9">Create your <span className="inline h-9 text-[darkorange]">Account</span></h1>
                <small className="text-[darkorange]">Register your account and go to login</small>
            </div>
            <div className="flex flex-col mt-4 ">
                <label htmlFor="username">Username</label>
                <div  className="flex items-center rounded-[5px] outline outline-[#ff3300] ">
                    <UserName  className="w-5 ml-2 text-[#ff3300] h-5"/>
                    <input type="text" id="username" {...register("username")} className="text-[16px] flex border-none px-2 w-70 h-8 outline-none cursor-pointer" />
                </div>
            </div>
            <div className="flex flex-col mt-4 ">
                <label htmlFor="email">Email</label>
                <div className="flex items-center rounded-[5px] outline outline-[#ff3300]">
                    <EmailIcon className="w-5 ml-2 text-[#ff3300] h-5"/>
                    <input type="email" id="email" {...register("email")} className="text-[16px] flex border-none px-2 w-75 h-8 outline-none cursor-pointer" />
                </div>
            </div>
            <div className="flex flex-col mt-4 h-auto">
                <label htmlFor="password">Password</label>
                <div className="flex items-center rounded-[5px] outline outline-[#ff3300]">
                    <PasswordIcon className="text-[#ff3300] ml-2 w-5 h-5"/>
                    <input type={`${hidePassword ? "password" : "text"}`}  id="password" {...register("password")} className="text-[16px] flex px-2 w-70 border-none h-9 outline-none cursor-pointer" />
                    <PasswordShow onClick={()=> setHidePassword(!hidePassword)} className="text-[#5b5b5b] w-6 mr-1 h-6 cursor-pointer duration-300 hover:bg-[#4848481c] rounded-[15px] p-1" />

                </div>
            </div>
            <div className="flex flex-col mt-4 cursor-pointer  h-auto">
                <label htmlFor="confirmPassword">Confirm password</label>
                <div className="flex items-center rounded-[5px] outline outline-[#ff3300]">
                    <ConfirmPassword className="w-5 h-5 text-[#ff3300] ml-2" />
                    <input type="confirmPassword" id="email" {...register("confirmPassword")} className="text-[16px] border-none flex px-2 w-70 h-9 outline-none cursor-pointer " />
                </div>
            </div>
            <div className="mt-3 flex items-center">
                <label  className="text-[14px]"><input type="checkbox" /> I agree to the <span className="text-[16px] text-[darkorange] font-normal"> Terms</span> & <span className="text-[16px] text-[darkorange] font-normal">Conditions</span></label>
            </div>
            <button className="mt-4 w-full h-10 rounded-2xl bg-[#232323] border-none outline-none text-white">Register</button>
            <label className="mt-3 text-[#525252] mx-auto" >----------------------- or -----------------------</label>
        <div className="mt-3 justify-center py-1 bg-white outline outline-[#474747] rounded-2xl flex flex-row items-center gap-2">
            <p className="text-[15px]">Continue with google</p>
            <GoogleIcon className="w-5 h-5" />
        </div>
        <div className="mt-2 flex gap-2">
            <label className="text-[14px]">Already have an account?</label>
            
        </div>
         </form>
    </div>
  )
}
