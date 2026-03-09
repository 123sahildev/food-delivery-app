import { useEffect, useState, useRef } from "react";
import { useForm } from 'react-hook-form'
import EmailIcon from "../assets/svgs/email.jsx";
import PasswordIcon from "../assets/svgs/password.jsx";
import ConfirmPassword from "../assets/svgs/confirmPassword.jsx";
import PasswordShow from "../assets/svgs/passwordShow.jsx";
import UserName from "../assets/svgs/username.jsx";
import GoogleIcon from "../assets/svgs/googleIcon.jsx";
import gsap from 'gsap';
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../Api/profile.user.js";

export default function Register({setRegister, setLogin}) {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState : { errors }, reset} = useForm();
    const [hidePassword, setHidePassword] = useState(true);
    const [isMatch, setDoesNotMatch] = useState(false);
    const [isRenderChecked, setUnChecked] = useState(false);

    const submit = (data) => {
        let checkPasswordMatched = data.confirmPassword === data.password;
        dispatch(userRegister(data));

        if (checkPasswordMatched && data.termsConditions ) {
            console.log(data);
            reset();
            setRegister(false);
            return;
        }

        if (!checkPasswordMatched && !data.termsConditions) {
            setDoesNotMatch(true);
            setUnChecked(false);
            return;
        }

        if (checkPasswordMatched && !data.termsConditions) {
            setUnChecked(true);
            setDoesNotMatch(false);
            return;
        }
        
        if (data.termsConditions && !checkPasswordMatched) {
            setDoesNotMatch(true);
            setUnChecked(false);
            return;
        }

    }

  return (
    <div onClick={() => setRegister(false)} className="flex absolute left-0 top-0  bg-[#131313a8] w-screen h-screen">
        <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit(submit)} className="self-center mx-auto px-6 py-3 flex flex-col bg-white rounded-[10px] w-min h-min  ">
            <div  className=" justify-self-center flex w-max self-center mt-2 flex-col gap-0 items-center justify-items-center">
                <h1 className="text-[23px] h-8">Create your <span className="inline text-[23px] h-8 text-[darkorange]">Account</span></h1>
                <small className="text-[darkorange] text-[11px]">Register your account and go to login</small>
            </div>
            <div className="flex flex-col mt-2 self-center ">
                <label htmlFor="username" className="text-[13px]">Username</label>
                <div  className=" w-min flex items-center rounded-[5px] outline outline-[#ff3300] ">
                    <UserName  className="w-5 ml-2 text-[#ff3300] h-5"/>
                    <input type="text" id="username"
                     {...register("username",
                        {
                            required : "username cann't be empty",
                            minLength : {
                                value : 9,
                                message : "username must contain 9 letters"
                            }
                        }
                     )} 
                     className="text-[13px] w-55 flex border-none px-2 h-7 outline-none cursor-pointer" />
                </div>
            </div>
            {errors.username && <small className="text-[red] text-[10px] mt-1 h-5">{errors.username?.message}</small>}

            <div className="flex flex-col mt-2 self-center ">
                <label htmlFor="email" className="text-[13px]">Email</label>
                <div className=" w-min flex items-center rounded-[5px] outline outline-[#ff3300]">
                    <EmailIcon className="w-5 ml-2 text-[#ff3300] h-5"/>
                    <input type="email" id="email" {...register("email",
                        {
                            required : "Email cann't be empty",
                            minLength : {
                                value : 9,
                                message : "email must contain 9 letters"
                            }
                        }
                    )} className="text-[13px] flex border-none px-2 w-55 h-7 outline-none cursor-pointer" />
                </div>
            </div>
            {errors.email && <small className="text-[red] text-[10px] mt-1 h-5">{errors.email?.message}</small>}
            <div className="flex flex-col mt-2 self-center h-auto">
                <label htmlFor="password" className="text-[13px]">Password</label>
                <div className="flex w-min items-center rounded-[5px] outline outline-[#ff3300]">
                    <PasswordIcon className="text-[#ff3300] ml-2 w-5 h-5"/>
                    <input type={`${hidePassword ? "password" : "text"}`}
                    id="password" {...register("password",
                        {
                            required : "please enter the password",
                            minLength : {
                                value : 9,
                                message : "password must be al least 9 letters"
                            }
                        }
                    )} 
                    className="text-[13px] flex px-2 w-49 border-none h-7 outline-none cursor-pointer" />
                    <PasswordShow onClick={()=> setHidePassword(!hidePassword)} className="text-[#5b5b5b] w-6 h-6 cursor-pointer duration-300 hover:bg-[#4848481c] rounded-[15px] p-1" />
                </div>
            </div>
            {errors.password && <small className="text-[red] text-[10px] mt-1 h-5">{errors.password?.message}</small>}
            <div className="flex flex-col mt-2 self-center cursor-pointer  h-auto">
                <label htmlFor="confirmPassword" className="text-[13px]">Confirm password</label>
                <div className=" w-min flex items-center rounded-[5px] outline outline-[#ff3300]">
                    <ConfirmPassword className="w-5 h-5 text-[#ff3300] ml-2" />
                    <input type="text" 
                    id="confirmPassword"
                    {...register("confirmPassword",
                        {
                            required : "please confirm your password",
                            minLength : {
                                value : 9,
                                message : "password does'nt matched to the password"
                            }
                        }
                    )}
                    className="text-[13px] border-none flex px-2 w-55 h-7 outline-none cursor-pointer " />
                </div>
            </div>
            {errors.confirmPassword && <small className="text-[red] text-[10px] mt-1 h-5">{errors.confirmPassword?.message}</small>}
            {isMatch && <small className="text-[red] text-[10px] mt-1 h-5">Password does'nt matched</small>}
            <div className="mt-2 flex items-center mx-auto">
                <label  className="text-[12px] cursor-pointer"><input onInput={() => {
                    console.log("ischeck : ", isRenderChecked);
                    setUnChecked(!isRenderChecked)
                    
                }} type="checkbox" {...register("termsConditions")} className="cursor-pointer"/> I agree to the <span className="text-[13px] text-[darkorange] font-normal"> Terms</span> & <span className="text-[12px] text-[darkorange] font-normal">Conditions</span></label>
            </div>
            {isRenderChecked && <small className="mx-auto text-[red] text-[10px] font-[Arial]">check and agree with terms & conditions</small>}
            <button type="submit" className="mt-4 w-full cursor-pointer hover:outline hover:outline-[#ff5100] transition-all duration-300 h-9 rounded-2xl mx-auto bg-[#0e0e0e] border-none outline-transparent text-white">Register</button>
            <label className="mt-3 text-[#525252] mx-auto" >----------------- or ------------------</label>
        <div className="mt-2 justify-center py-1 w-[calc(100%-20px)] bg-white outline outline-[#474747] rounded-2xl flex flex-row items-center self-center gap-2">
            <p className="text-[12px] cursor-pointer">Continue with google</p>
            <GoogleIcon className="w-4 h-4 cursor-pointer" />
        </div>
        <div className="mt-2 flex self-center mb-2">
            <label className="text-[14px]">Already have an account?</label>
            <p onClick={() => {
                setLogin(true)
                setRegister(false)
            }} className="text-[13px] cursor-pointer hover:border-b hover:border-[darkorange] text-[darkorange] ml-1">Login</p>
        </div>
        </form>
    </div>
  );
}

