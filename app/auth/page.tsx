"use client"
import React, { useState } from 'react'
import SocialSignUp from './SignUp/SoicalSignUp'
import SignUpEmail from './SignUp/SignUpEmail'
import SocialLogin from './SignIn/SocialLogin'
import SignInEmail from './SignIn/SignInEmail'

function AuthPage() {
     const [PageView,setPageView]=useState("SignUp")
  return (
    <div className='flex items-center justify-center h-screen '>
        <div className='w-[720px] h-[90%]   p-20 shadow-lg'>
          { PageView === 'SignUp' && <SocialSignUp setPageView={setPageView}/> }
          {PageView === "Sign up with Email" &&  <SignUpEmail setPageView={setPageView}/> }
        {PageView==='SignIn' && <SocialLogin setPageView={setPageView}/>}
        {PageView === "Sign in with Email" && <SignInEmail setPageView={setPageView}/>}
        </div>
        
    </div>
  )
}

export default AuthPage