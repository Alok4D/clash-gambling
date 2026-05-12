import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import LoginForm from "./_components/LoginForm";

const LoginPage = () => {
    return (
        <div
            style={{
                backgroundImage: "url('/logo-bg.svg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundColor: "#0B0E11"
            }}
            className="min-h-screen w-full text-white selection:bg-[#00FFA3]/30"
        >
            <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col px-6 py-8 lg:px-20">

                {/* Back to Home Button */}
                <Link
                    href="/"
                    style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        lineHeight: '24px',
                        color: '#FFF'
                    }}
                    className="group inline-flex items-center justify-center gap-[10px] px-[28px] py-[14px] rounded-[10px] border border-white transition-all hover:bg-white/10 w-fit"
                >
                    <ChevronLeft size={18} />
                    Back to home
                </Link>

                <main className="mt-12 flex flex-1 flex-col justify-between gap-16 lg:flex-row lg:items-center">

                    {/* Left Column: Branding & Features */}
                    <div className="flex flex-col w-full">
                        <div className="mb-8 max-w-[400px]">
                            {/* Logo Placeholder */}
                            <div className="flex justify-center items-center">
                                <Image src="/login-logo.svg" alt="Logo"
                                draggable={false}
                                priority={true}
                                width={100} height={100} className="w-full h-auto" />
                            </div>
                        </div>

                        <h1 
                            style={{ 
                                fontFamily: 'Montserrat, sans-serif',
                                fontSize: '40px',
                                fontWeight: 700,
                                lineHeight: '48px',
                                color: '#F2F2F2',
                                alignSelf: 'stretch'
                            }}
                        >
                            Welcome back
                        </h1>
                        <p 
                            style={{ 
                                fontFamily: 'Montserrat, sans-serif',
                                fontSize: '20px',
                                fontWeight: 400,
                                lineHeight: '32px',
                                color: '#B7B7B7',
                                marginTop: '16px'
                            }}
                            className="max-w-md"
                        >
                            Access your sports intelligence dashboard and continue making data-driven decisions.
                        </p>

                        {/* Feature Cards */}
                        <div className="mt-12 space-y-4">
                            <div className="flex self-stretch items-start gap-[8px] p-[12px] rounded-[14px] bg-[#00FF88]/20 transition-all hover:bg-[#00FF88]/25">
                                <div 
                                    className="mt-2 shrink-0" 
                                    style={{ 
                                        width: '8px', 
                                        height: '8px', 
                                        borderRadius: '33554400px', 
                                        background: 'var(--primary-primary-100, #0F8)' 
                                    }} 
                                />
                                <div>
                                    <h4 
                                        style={{ 
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontSize: '20px',
                                            fontWeight: 400,
                                            lineHeight: '32px',
                                            color: '#F2F2F2'
                                        }}
                                    >
                                        Real-time Market Data
                                    </h4>
                                    <p 
                                        style={{ 
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontSize: '14px',
                                            fontWeight: 500,
                                            lineHeight: '24px',
                                            color: '#B7B7B7'
                                        }}
                                    >
                                        Live odds and line movements
                                    </p>
                                </div>
                            </div>
                            <div className="flex self-stretch items-start gap-[8px] p-[12px] rounded-[14px] bg-[#00FF88]/20 transition-all hover:bg-[#00FF88]/25">
                                <div 
                                    className="mt-2 shrink-0" 
                                    style={{ 
                                        width: '8px', 
                                        height: '8px', 
                                        borderRadius: '33554400px', 
                                        background: 'var(--primary-primary-100, #0F8)' 
                                    }} 
                                />
                                <div>
                                    <h4 
                                        style={{ 
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontSize: '20px',
                                            fontWeight: 400,
                                            lineHeight: '32px',
                                            color: '#F2F2F2'
                                        }}
                                    >
                                        AI-Powered Insights
                                    </h4>
                                    <p 
                                        style={{ 
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontSize: '14px',
                                            fontWeight: 500,
                                            lineHeight: '24px',
                                            color: '#B7B7B7'
                                        }}
                                    >
                                        SharpBot analysis on demand
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Login Form */}
                    <LoginForm />
                </main>
            </div>
        </div>
    );
};

export default LoginPage;