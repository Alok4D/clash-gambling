"use client";

import { Mail } from "lucide-react";

const ForgotPasswordForm = () => {
    return (
        <form className="mt-10 space-y-8 w-full">
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
    );
};

export default ForgotPasswordForm;
