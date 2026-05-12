"use client";

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
          className="mb-8 flex w-fit items-center text-[#00FFA3] transition-transform hover:-translate-x-1"
        >
          <ArrowLeft size={24} />
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
            <button className="w-full rounded-xl bg-[#00FFA3] py-4 text-lg font-bold text-black transition-all hover:bg-[#00e692] hover:shadow-[0_0_20px_rgba(0,255,163,0.4)] active:scale-[0.98]">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordSuccess;