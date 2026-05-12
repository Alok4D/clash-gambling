import Navbar from "./_components/Navbar";
import Intro from "./_components/Intro";
import FeaturesSection from "./_components/FeaturesSection";
import GetStarted from "./GetStarted";
import PricingSection from "./PricingSection";
import Footer from "./_components/Footer";



export default function page() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#0A0C10]">
      {/* Hero Section with Background */}
      <div className="relative w-full bg-[url('/landing-page.svg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0C10]/20 to-[#0A0C10]" />
        <div className="relative z-10">
          <Navbar />
          <Intro />
        </div>
      </div>
      
      {/* Other Sections */}
      <div className="relative z-10 flex flex-col gap-10 bg-[#0A0C10]">
        <FeaturesSection />
        <GetStarted />
        <PricingSection />
        <Footer />
      </div>
    </main>
  );
}
