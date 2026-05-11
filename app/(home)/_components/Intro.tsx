import Container from "@/components/Container";
import blobImage from "@/images/homepage/blob.png";
import waveBottom from "@/images/homepage/wave-bottom.png";
import wave from "@/images/homepage/wave.png";
import tower from "@/images/homepage/tower.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LucideLetterText, LucideRabbit, LucideUsers } from "lucide-react";

export default function Intro() {
  return (
    <div className="min-h-screen relative bg-background overflow-hidden">
      <Image
        className="absolute left-0 top-0 pointer-events-none"
        src={blobImage}
        alt="blob"
      />
      <Image
        className="absolute right-0 top-0 pointer-events-none"
        src={waveBottom}
        alt="wave"
      />
      <Image
        className="absolute right-0 bottom-0 translate-y-1/3 pointer-events-none"
        src={wave}
        alt="wave"
      />
      <Image
        className="absolute right-0 bottom-0 h-full object-contain pointer-events-none hidden lg:block max-w-lg"
        src={tower}
        alt="wave"
      />
      <div className="relative py-10 lg:py-44">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h1 className="font-bold text-white text-3xl lg:text-5xl xl:text-[66px] leading-tight">
              Identify vacant homes rebuild neighborhoods create jobs
            </h1>
            <div className="max-w-lg text-gray-[#C0C0BF]">
              <p>
                One national platform that connects municipalities, contractors,
                inspectors, buyers, sellers, and lenders to efficiently
                rehabilitate vacant properties.
              </p>
            </div>
            <div className="text-[#6666666a] space-x-4">
              <Button size="lg">Get Early Access</Button>
              <Button size="lg" variant="secondary">
                View Demo
              </Button>
            </div>
            <div className="p-1 bg-[#2f2f2e] md:space-x-4 flex flex-wrap rounded">
              <input
                type="text"
                className="bg-[#424241] flex-1 h-14 text-white p-4 placeholder-white"
                placeholder="Enter your email"
              />
              <select
                className="bg-[#424241] flex-1 h-14 text-white p-4 placeholder-white"
                defaultValue="Select your role"
              >
                <option disabled>Select your role</option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
                <option value="contractor">Contractor</option>
                <option value="inspector">Inspector</option>
              </select>
              <Button className="w-full md:w-auto" size="lg">
                Subscribe
              </Button>
            </div>

            <div className="flex flex-wrap justify-start gap-4">
              <div className="rounded bg-[#353534] p-6 min-w-54 max-w-54 flex flex-col items-center gap-2 text-sm">
                <LucideRabbit className="fill-primary" />
                <span>AI Tutor</span>
              </div>
              <div className="rounded bg-[#353534] p-6 min-w-54 max-w-54 flex flex-col items-center gap-2 text-sm">
                <LucideLetterText className="fill-primary" />
                <span>Teacher Dashboard</span>
              </div>
              <div className="rounded bg-[#353534] p-6 min-w-54 max-w-54 flex flex-col items-center gap-2 text-sm">
                <LucideUsers className="fill-primary" />
                <span>Success Rate</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
