import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const PasswordSuccess = () => {
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

      <div className="relative z-10 w-full max-w-lg rounded-[32px] border border-[#00FFA3]/10 bg-[#111418] p-10 shadow-[0_0_60px_rgba(0,255,163,0.04)] md:p-12">

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

        {/* Content Section */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Password Reset Successful
          </h1>
          <p className="max-w-sm text-base leading-relaxed text-gray-400">
            Your password has been reset. Please log in using your new password.
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-12">
          <Link href="/login">
            <button 
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '24px',
                color: '#0B0F14'
              }}
              className="flex w-full self-stretch items-center justify-center gap-[10px] px-[28px] py-[14px] rounded-[10px] bg-[#00FF88] transition-all hover:bg-[#00e692] hover:shadow-[0_0_20px_rgba(0,255,163,0.4)] active:scale-[0.98]"
            >
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordSuccess;