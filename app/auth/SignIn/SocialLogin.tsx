import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
function SocialLogin({setPageView}:any) {
  return (
<div className='flex items-center flex-col md:w-full w-screen bg gap-32 '>

    <div className='text-header-1 '>Welcome Back</div>
    {/* Social Button */}
    <div className='flex flex-col gap-6 w-full'>

    
    <div className='flex flex-col gap-8 w-full'>

    <div className='w-[95%] min-w-[350px]  h-[50px] outline outline-1 outline-offset-1 rounded-3xl flex items-center px-6 gap-20 hover:cursor-pointer'>
        <FcGoogle size={30}/>
        <span className='md:text-header-3 text-body-3'>Sign in With Google</span>
    </div>
    <div className='w-[95%] min-w-[350px] h-[50px] outline outline-1 outline-offset-1 rounded-3xl flex items-center px-6 gap-20 hover:cursor-pointer'>
        <FaFacebook color='#1877F2' size={30}/>
        <span className='md:text-header-3 text-body-3'>Sign in With Facebook</span>
    </div>
    <div 
    onClick={()=>setPageView('Sign in with Email')}
    className='w-[95%] min-w-[350px] h-[50px] outline outline-1 outline-offset-1 rounded-3xl flex items-center px-6 gap-20 hover:cursor-pointer'>
        <CiMail  size={30}/>
        <span className='md:text-header-3 text-body-3'>Sign in With Email</span>
    </div>
    </div>
    <span className='text-body-3'>Don't Have an Account? 
        <span 
        onClick={()=>setPageView('SignUp')}
        className='text-header-3 tracking-tight 	 text-primaryColor-400 hover:text-primaryColor-600 hover:cursor-pointer'> Sign up</span>
    </span>
    </div>
    </div>  )
}

export default SocialLogin