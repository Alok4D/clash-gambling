"use client";

import Image from "next/image";

const GetStarted = () => {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-[#0B0E11] py-20 px-4 flex items-center justify-center">
      
      {/* Left Side Cloud (Megh) */}
      <div className="absolute left-[-15%] top-[10%] z-0 -rotate-[165deg] opacity-20 select-none pointer-events-none">
        <Image 
          src="/clold.png" 
          alt="Cloud Decor" 
          width={760} 
          height={525} 
          className="object-contain"
          priority
        />
      </div>

      {/* Right Side Cloud (Megh) */}
      <div className="absolute right-[-15%] top-[10%] z-0 -rotate-[165deg] opacity-20 select-none pointer-events-none scale-x-[-1]">
        <Image 
          src="/clold.png" 
          alt="Cloud Decor" 
          width={760} 
          height={525} 
          className="object-contain"
        />
      </div>

      {/* Main CTA Card */}
      <div className="relative z-10 flex w-full max-w-[840px] flex-col items-center justify-center gap-6 rounded-[28px] border border-[rgba(18,18,18,0)] bg-[#1B1B1B] px-6 py-7 shadow-[0_0_8px_0_rgba(0,255,163,0.20)] md:px-6 md:py-7">
        
        {/* Subtle Green Glow Top Center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#00FFA3]/40 to-transparent" />

        <h2 className="text-3xl font-bold text-white md:text-5xl lg:text-6xl">
          Ready to Get Started?
        </h2>
        
        <p className="font-montserrat mx-auto max-w-2xl text-[16px] font-medium leading-[24px] text-[#B7B7B7] text-center">
          Join the waitlist for early access to SharpMatrix AI and start making data-driven decisions.
        </p>

        <button className="flex items-center justify-center gap-[10px] rounded-[10px] bg-[#00FF88] px-6 py-[14px] text-lg font-bold text-black transition-all hover:bg-[#00e692] hover:shadow-[0_0_20px_rgba(0,255,163,0.4)] active:scale-95">
          Get Early Access
        </button>
      </div>

    </section>
  );
};

export default GetStarted;