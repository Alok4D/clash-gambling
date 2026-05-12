"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Lock, EyeOff } from "lucide-react";

const ResetPassword = () => {
  return (
    <div
      style={{ 
        backgroundImage: "url('/logo-bg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "#0B0E11"
      }}
      className="flex min-h-screen items-center justify-center p-4 selection:bg-[#00FFA3]/30"
    >
      
      <div className="relative z-10 w-full max-w-md rounded-[32px] border border-[#00FFA3]/10 bg-[#111418] p-8 shadow-[0_0_60px_rgba(0,255,163,0.04)] md:p-10">
        
        {/* Back Button */}
        <Link 
          href="/forgot-password" 
          style={{ 
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '24px',
            color: '#FFF'
          }}
          className="group mb-8 inline-flex items-center justify-center gap-[10px] px-[28px] py-[14px] rounded-[10px] border border-white transition-all hover:bg-white/10 w-fit"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Enter new password
          </h1>
          <p className="text-base text-gray-400">
            Please create a new password to continue.
          </p>
        </div>

        {/* Form */}
        <form className="mt-10 space-y-6">
          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">
              Password
            </label>
            <div className="relative">
              <Lock 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" 
                size={18} 
              />
              <input
                type="password"
                placeholder="**********"
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-12 text-white placeholder-gray-600 outline-none transition-all focus:border-[#00FFA3]/40 focus:bg-white/[0.07]"
              />
              <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300">
                <EyeOff size={18} />
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">
              Confirm password
            </label>
            <div className="relative">
              <Lock 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" 
                size={18} 
              />
              <input
                type="password"
                placeholder="**********"
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-12 text-white placeholder-gray-600 outline-none transition-all focus:border-[#00FFA3]/40 focus:bg-white/[0.07]"
              />
              <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300">
                <EyeOff size={18} />
              </button>
            </div>
          </div>

          <button
            type="submit"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '24px',
              color: '#0B0F14'
            }}
            className="flex w-full self-stretch items-center justify-center gap-[10px] px-[28px] py-[14px] rounded-[10px] bg-[#00FF88] transition-all hover:bg-[#00e692] hover:shadow-[0_0_20px_rgba(0,255,163,0.4)] active:scale-[0.98]"
          >
            Reset Password
          </button>
        </form>

        {/* Bottom Link */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Remember your password?{" "}
            <Link 
              href="/login" 
              className="font-bold text-[#00FFA3] hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;