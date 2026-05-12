import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ForgotPasswordForm from "./_components/ForgotPasswordForm";

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
        <ForgotPasswordForm />

        {/* Bottom Link */}
        <div className="mt-8 text-center">
          <p 
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '24px',
              color: '#B7B7B7'
            }}
          >
            Remember your password?{" "}
            <Link 
              href="/login" 
              style={{ 
                color: '#00FF88',
                fontWeight: 500
              }}
              className="hover:underline"
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