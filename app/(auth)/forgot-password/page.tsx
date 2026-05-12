"use client";

import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

const ForgotPassword = () => {
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
      <div className="w-full max-w-md rounded-[32px] border border-[#00FFA3]/10 bg-[#111418] p-8 shadow-[0_0_50px_rgba(0,255,163,0.05)] md:p-10">
        
        {/* Back Button */}
        <Link 
          href="/login" 
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

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Forgot your password?
          </h1>
          <p className="text-base leading-relaxed text-gray-400">
            Enter your email address, and we'll send you a one-time password (OTP) to reset your password.
          </p>
        </div>

        {/* Form */}
        <form className="mt-10 space-y-8">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">
              Email address
            </label>
            <div className="relative">
              <Mail 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" 
                size={18} 
              />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-4 text-white placeholder-gray-600 outline-none transition-all focus:border-[#00FFA3]/40 focus:bg-white/[0.07]"
              />
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
            Send link
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

export default ForgotPassword;