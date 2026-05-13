"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

const ResetPasswordForm = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState<{ password?: string; confirmPassword?: string }>({});

    const validate = () => {
        const newErrors: { password?: string; confirmPassword?: string } = {};
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long";
        }

        if (confirmPassword !== password) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log("Reset password submitted:", { password, confirmPassword });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-10 space-y-8 w-full">
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
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (errors.password) setErrors({ ...errors, password: undefined });
                        }}
                        placeholder="**********"
                        className={`w-full rounded-[10px] border bg-white/5 py-[14px] pl-12 pr-[48px] outline-none transition-all focus:bg-white/[0.08] ${
                            errors.password ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-[#00FFA3]/50"
                        }`}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                    >
                        {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                    </button>
                </div>
                {errors.password && (
                    <p className="text-red-500 text-[12px] mt-1 ml-1 animate-in fade-in slide-in-from-top-1 duration-200">
                        {errors.password}
                    </p>
                )}
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
                    Confirm Password
                </label>
                <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: undefined });
                        }}
                        placeholder="**********"
                        className={`w-full rounded-[10px] border bg-white/5 py-[14px] pl-12 pr-[48px] outline-none transition-all focus:bg-white/[0.08] ${
                            errors.confirmPassword ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-[#00FFA3]/50"
                        }`}
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                    >
                        {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                    </button>
                </div>
                {errors.confirmPassword && (
                    <p className="text-red-500 text-[12px] mt-1 ml-1 animate-in fade-in slide-in-from-top-1 duration-200">
                        {errors.confirmPassword}
                    </p>
                )}
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
