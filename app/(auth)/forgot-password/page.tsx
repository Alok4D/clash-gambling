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
      <div 
        style={{
            display: 'inline-flex',
            padding: '32px',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--space-space-32, 32px)',
            borderRadius: 'var(--radius-radius-16, 16px)',
            border: '1px solid var(--primary-primary-20, rgba(0, 255, 136, 0.20))',
            boxShadow: '0 2px 8px 0 var(--primary-primary-20, rgba(0, 255, 136, 0.20))',
            backgroundColor: '#111418'
        }}
        className="w-full max-w-[550px]"
      >
      

        <div className="space-y-4 text-center">
          <h1 
            style={{
                color: 'var(--text-stroke-card-color-text-strong, #F2F2F2)',
                fontFamily: 'var(--text-style-text-style, Montserrat), sans-serif',
                fontSize: 'var(--typography-scale-h3, 40px)',
                fontWeight: 700,
                lineHeight: '48px'
            }}
          >
            Forgot your password?
          </h1>
          <p 
            style={{
                alignSelf: 'stretch',
                color: 'var(--text-stroke-card-color-text-weak, #B7B7B7)',
                fontFamily: 'var(--text-style-text-style, Montserrat), sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '24px'
            }}
          >
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
