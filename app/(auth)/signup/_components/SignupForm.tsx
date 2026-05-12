"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, Mail, Lock, EyeOff, Eye } from "lucide-react";

const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="flex flex-col lg:w-[480px]">
            <h2
                style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '40px',
                    fontWeight: 700,
                    lineHeight: '48px',
                    color: '#FFF',
                    textAlign: 'center',
                    alignSelf: 'stretch'
                }}
                className="mb-10"
            >
                Create your account
            </h2>

            <form className="space-y-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                    <label className="text-sm text-gray-400">Full name</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input type="text" placeholder="Clash" className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-4 outline-none focus:border-[#00FFA3]/50" />
                    </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                    <label className="text-sm text-gray-400">Email address</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input type="email" placeholder="you@example.com" className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-4 outline-none focus:border-[#00FFA3]/50" />
                    </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                    <label className="text-sm text-gray-400">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="**********"
                            className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-12 outline-none focus:border-[#00FFA3]/50"
                        />
                        <EyeOff
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                            size={18}
                        />
                    </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-1.5">
                    <label className="text-sm text-gray-400">Confirm password</label>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="**********"
                            className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-12 outline-none focus:border-[#00FFA3]/50"
                        />
                        <EyeOff
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                            size={18}
                        />
                    </div>
                </div>

                <div className="flex items-start gap-3 py-2">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded accent-[#00FFA3]" />
                    <span className="text-sm text-gray-400">I agree to the Terms of Service and Privacy Policy</span>
                </div>

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
                    Create account
                </button>

                <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-white/10"></div>
                    <span className="mx-4 text-sm text-gray-500">Or</span>
                    <div className="flex-grow border-t border-white/10"></div>
                </div>

                <button
                    style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        lineHeight: '24px',
                        color: '#0B0F14'
                    }}
                    className="flex w-full self-stretch items-center justify-center gap-[10px] px-[28px] py-[14px] rounded-[10px] bg-white transition-all hover:bg-gray-100 active:scale-[0.98]"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" /></svg>
                    Continue with Google
                </button>
            </form>

            <p
                style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '24px',
                    color: '#B7B7B7'
                }}
                className="mt-8 text-center"
            >
                Already have an account?{" "}
                <Link
                    href="/login"
                    style={{
                        color: '#00FF88',
                        fontWeight: 500
                    }}
                    className="hover:underline"
                >
                    Log In
                </Link>
            </p>
        </div>
    );
};

export default SignupForm;
