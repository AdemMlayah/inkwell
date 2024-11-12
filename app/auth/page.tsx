"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import './auth.css'
const SocialSignUp = dynamic(() => import('./SignUp/SoicalSignUp'), { ssr: false });
const SignUpEmail = dynamic(() => import('./SignUp/SignUpEmail'), { ssr: false });
const SocialLogin = dynamic(() => import('./SignIn/SocialLogin'), { ssr: false });
const SignInEmail = dynamic(() => import('./SignIn/SignInEmail'), { ssr: false });

type PageViewType = "SignUp" | "Sign up with Email" | "SignIn" | "Sign in with Email";

function AuthPage() {
  const [pageView, setPageView] = useState<PageViewType>("SignUp");

  return (
    <div className="flex justify-center h-screen  mt-20">
      <div className="w-full md:w-[720px] h-full md:h-[91%] bg-[#FAFAFA] p-10 md:p-20 shadow-lg flex items-center">
        {pageView === "SignUp" && <SocialSignUp setPageView={setPageView} />}
        {pageView === "Sign up with Email" && <SignUpEmail setPageView={setPageView} />}
        {pageView === "SignIn" && <SocialLogin setPageView={setPageView} />}
        {pageView === "Sign in with Email" && <SignInEmail setPageView={setPageView} />}
      </div>
    </div>
  );
}

export default AuthPage;
