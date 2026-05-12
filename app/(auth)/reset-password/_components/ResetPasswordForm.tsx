"use client";

import React, { useState } from "react";
import { Lock, EyeOff, Eye } from "lucide-react";

const ResetPasswordForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
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
                        type={showPassword ? "text" : "password"}
                        placeholder="**********"
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-12 text-white placeholder-gray-600 outline-none transition-all focus:border-[#00FFA3]/40 focus:bg-white/[0.07]"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                    >
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
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="**********"
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-12 text-white placeholder-gray-600 outline-none transition-all focus:border-[#00FFA3]/40 focus:bg-white/[0.07]"
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                    >
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
    );
};

export default ResetPasswordForm;
