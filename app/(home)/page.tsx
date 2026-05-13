import Image from "next/image";
import Navbar from "./_components/Navbar";
import Intro from "./_components/Intro";
import FeaturesSection from "./_components/FeaturesSection";
import GetStarted from "./_components/GetStarted";
import PricingSection from "./_components/PricingSection";
import Footer from "./_components/Footer";

export default function page() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#0A0C10]">
      {/* Hero Section with Background */}
      <div className="relative w-full">
        {/* Background Image using Next.js Image for optimization and to prevent flickering */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/landing-page.svg"
            alt="Background"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0A0C10]/20 to-[#0A0C10]" />
        </div>
        
        <div className="relative z-10">
          <Navbar />
          <Intro />
        </div>
      </div>

      {/* Other Sections */}
      <div className="relative z-5 flex flex-col gap-10 bg-[#0A0C10]">
        <FeaturesSection />
        <GetStarted />
        <PricingSection />
        <Footer />
      </div>
    </main>
  );
}
