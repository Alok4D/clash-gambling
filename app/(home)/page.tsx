
import Footer from "./_components/footer/Footer";
import Intro from "./_components/Intro";
import Navbar from "./_components/navbar/Navbar";

import Communities from "./_components/Communities";
import FeaturedProjects from "./_components/Featured";
import LatestNews from "./_components/News";
import NewsLetter from "./_components/NewsLetter";
import QualityServices from "./_components/QualityServices ";
import ClientTestimonials from "./_components/Testimonial";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function page() {
  return (
    <>

      <div className="w-full h-screen bg-background flex flex-col gap-6 justify-center items-center">
       <Link href="/user-dashboard">
       <Button
        
          className="text-2xl font-medium text-foreground">User Dashboard</Button>
       </Link>
        <Link href="/dashboard">
          <Button className="text-2xl font-medium text-foreground">Admin Dashboard</Button>
        </Link>
      </div>
      {/* <Navbar />
      <Intro />

      <Communities />
      <FeaturedProjects />
      <QualityServices />
      <ClientTestimonials />
      <LatestNews />
      <NewsLetter />
      <Footer/> */}
    </>
  );
}
