import { useEffect, useState, useRef } from "react";
import { useForm } from 'react-hook-form'
import EmailIcon from "../assets/svgs/email.jsx";
import PasswordIcon from "../assets/svgs/password.jsx";
import ConfirmPassword from "../assets/svgs/confirmPassword.jsx";
import PasswordShow from "../assets/svgs/passwordShow.jsx";

export default function login() {
    const { register, handleSubmit, formState : { errors }, reset} = useForm();
    const [hidePassword, setHidePassword] = useState(true);

    const submit = (data) => {
        console.log(data);
        
    }

  return (
    <div className="flex absolute  left-0 top-0 items-center  justify-items-center z-100 bg-[#131313a8] w-400 h-full">
         <form onSubmit={handleSubmit(submit)} className="min-w-75 p-5 flex flex-col bg-white rounded-[5px] self-center justify-self-center">
            <div className="justify-self-center mt-3 flex flex-col gap-0 items-center justify-items-center">
                <h1 className="text-[25px]">create your <span className="text-[darkorange]">Account</span></h1>
                <p className="text-[20px] font-bold mt-0">and go <span className="text-[20px] ">login</span></p>
            </div>
            <div className="flex flex-col mt-4 ">
                <label htmlFor="email">Username</label>
                <div className="flex items-center rounded-[5px] outline outline-[#ff3300] gap-2">
                    <EmailIcon  className="w-7 ml-2 text-[#ff3300] h-7"/>
                    <input type="email" id="email" {...register("username")} className="text-[16px] flex border-none px-2 w-75 h-8 outline-none cursor-pointer" />
                </div>
            </div>
            <div className="flex flex-col mt-4 ">
                <label htmlFor="email">Email</label>
                <div className="flex items-center rounded-[5px] outline outline-[#ff3300] gap-2">
                    <EmailIcon className="w-7 ml-2 text-[#ff3300] h-7"/>
                    <input type="email" id="email" {...register("email")} className="text-[16px] flex border-none px-2 w-75 h-8 outline-none cursor-pointer" />
                </div>
            </div>
            <div className="flex flex-col mt-4 h-auto">
                <label htmlFor="password">Password</label>
                <div className="flex items-center rounded-[5px] outline outline-[#ff3300] gap-2">
                    <PasswordIcon className="text-[#ff3300] ml-2 w-6 h-6"/>
                    <input type={`${hidePassword ? "password" : "text"}`}  id="password" {...register("password")} className="text-[16px] flex px-2 w-75 border-none h-9 outline-none cursor-pointer" />
                    <PasswordShow onClick={()=> setHidePassword(!hidePassword)} className="text-black w-7 mr-1 h-7 cursor-pointer duration-300 hover:bg-[#61616128] rounded-[15px] p-1" />

                </div>
            </div>
            <div className="flex flex-col mt-4 cursor-pointer  h-auto">
                <label htmlFor="confirmPassword">Confirm password</label>
                <div className="flex items-center rounded-[5px] outline outline-[#ff3300] gap-2">
                    <ConfirmPassword className="w-6 h-6 text-[#ff3300] ml-2" />
                    <input type="confirmPassword" id="email" {...register("confirmPassword")} className="text-[16px] border-none flex px-2 w-75 h-9 outline-none cursor-pointer " />
                </div>
            </div>

         </form>
    </div>
  )
}
