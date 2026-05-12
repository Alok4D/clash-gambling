"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, EyeOff, Eye } from "lucide-react";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col w-full">
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
                Log in to your account
            </h2>

            <form className="space-y-6">
                <div className="space-y-2">
                    <label
                        style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: '24px',
                            color: '#B7B7B7'
                        }}
                    >
                        Email address
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full rounded-[10px] border border-white/10 bg-white/5 py-[14px] pl-12 pr-[28px] outline-none transition-all focus:border-[#00FFA3]/50 focus:bg-white/[0.08]"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label
                        style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: '24px',
                            color: '#B7B7B7'
                        }}
                    >
                        Password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="**********"
                            className="w-full rounded-[10px] border border-white/10 bg-white/5 py-[14px] pl-12 pr-[48px] outline-none transition-all focus:border-[#00FFA3]/50 focus:bg-white/[0.08]"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                        >
                            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                        <input type="checkbox" className="accent-[#00FFA3] h-4 w-4 rounded" />
                        I agree to the Terms of Service and Privacy Policy
                    </label>
                    <Link
                        href="/forgot-password"
                        style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: '14px',
                            fontWeight: 500,
                            lineHeight: '24px',
                            color: '#00FF88'
                        }}
                        className="hover:underline"
                    >
                        Forgot password?
                    </Link>
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
                    Log In
                </button>

                <div className="relative flex items-center py-2">
                    <div
                        style={{
                            width: '276px',
                            height: '1px',
                            background: 'linear-gradient(270deg, var(--primary-primary-100, #0F8) 0%, rgba(18, 18, 18, 0.00) 100%)'
                        }}
                        className="flex-grow"
                    ></div>
                    <span
                        style={{
                            color: '#FFF',
                            fontFamily: 'var(--text-style-text-style, Montserrat), sans-serif',
                            fontSize: '16px',
                            fontWeight: 500,
                            lineHeight: '24px'
                        }}
                        className="mx-4 flex-shrink"
                    >
                        Or
                    </span>
                    <div
                        style={{
                            width: '276px',
                            height: '1px',
                            background: 'linear-gradient(90deg, var(--primary-primary-100, #0F8) 0%, rgba(18, 18, 18, 0.00) 100%)'
                        }}
                        className="flex-grow"
                    ></div>
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
                    <svg width="20" height="20" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
                    </svg>
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
                Don&apos;t have an account?{" "}
                <Link
                    href="/signup"
                    style={{
                        color: '#00FF88',
                        fontWeight: 500
                    }}
                    className="hover:underline"
                >
                    Create account
                </Link>
            </p>
        </div>
    );
};

export default LoginForm;
