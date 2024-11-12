import React from 'react'
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { CiMail } from "react-icons/ci"

function SoicalSignUp({ setPageView }: any) {
  return (
    <div className='flex items-center flex-col md:w-full w-screen gap-32'>
      <div className='text-header-1'>Join Us</div>
      {/* Social Buttons */}
      <div className='flex flex-col gap-6 w-full'>
        <div className='flex flex-col gap-8 w-full'>
          <div className='w-[95%] min-w-[350px] h-[50px] outline outline-1 outline-offset-1 rounded-3xl flex items-center px-6 gap-20 hover:cursor-pointer'>
            <FcGoogle size={30} />
            <span className='md:text-header-3 text-body-3'>Sign up With Google</span>
          </div>
          <div className='w-[95%] min-w-[350px] h-[50px] outline outline-1 outline-offset-1 rounded-3xl flex items-center px-6 gap-20 hover:cursor-pointer'>
            <FaFacebook color='#1877F2' size={30} />
            <span className='md:text-header-3 text-body-3'>Sign up With Facebook</span>
          </div>
          <div 
            onClick={() => setPageView('Sign up with Email')}
            className='w-[95%] min-w-[350px] h-[50px] outline outline-1 outline-offset-1 rounded-3xl flex items-center px-6 gap-20 hover:cursor-pointer'>
            <CiMail size={30} />
            <span className='md:text-header-3 text-body-3'>Sign up With Email</span>
          </div>
        </div>
        <span className='text-body-3'>
          Already Have an Account? 
          <span
            onClick={() => setPageView('SignIn')}
            className='text-header-3 tracking-tight text-primaryColor-400 hover:text-primaryColor-600 hover:cursor-pointer'>
            {' '}Sign in
          </span>
        </span>
      </div>
    </div>
  )
}

export default SoicalSignUp
