import Container from "@/components/Container";
import { Mail, Send, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <Container>
        <div className="w-full bg-black pt-16 pb-8">
          <div className="px-3 md:px-3 lg:px-0">
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">
                <div className="shrink-0 lg:w-64">
                  <div className="mb-4 flex justify-center items-center">
                    <Image
                      src="/footer-image/footer-logo.png"
                      alt="footer-logo"
                      height={70}
                      width={100}
                    />
                  </div>

                  <div className="relative max-w-sm">
                    <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
                      <div className="pl-4 pr-3">
                        <Mail className="w-5 h-5 text-gray-500" />
                      </div>
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="bg-transparent py-3.5 pr-12 flex-1 text-sm text-gray-300 placeholder-gray-500 outline-none"
                      />
                      <button className="absolute right-3 p-2 hover:opacity-80 transition-opacity">
                        <Send className="w-5 h-5 text-[#F0F0F0]" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-wrap lg:justify-end gap-12">
                  <div className="px-4">
                    <h3 className="text-[#8D8D8C] font-semibold mb-5 text-[1.25rem]">
                      Navigation
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="#"
                          className="text-[#F0F0F0] hover:text-white transition-colors block"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#F0F0F0] hover:text-white transition-colors block"
                        >
                          Properties
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#F0F0F0] hover:text-white transition-colors block"
                        >
                          Testimonials
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#F0F0F0] hover:text-white transition-colors block"
                        >
                          FAQ&apos;s
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#F0F0F0] hover:text-white transition-colors block"
                        >
                          Terms & Conditions
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="px-4">
                    <h3 className="text-[#8D8D8C] font-semibold mb-5 text-[1.25rem]">
                      About Us
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="#"
                          className="text-[#F0F0F0] hover:text-white transition-colors block"
                        >
                          Our Story
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#F0F0F0] hover:text-white transition-colors block"
                        >
                          Our Values
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#F0F0F0] hover:text-white transition-colors block"
                        >
                          Our Team
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="px-4">
                    <h3 className="text-[#8D8D8C] font-semibold mb-5 text-[1.25rem]">
                      Properties
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="#"
                          className="text-[#F0F0F0] hover:text-white transition-colors block"
                        >
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#F0F0F0] hover:text-white transition-colors block"
                        >
                          Categories
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="px-4">
                    <h3 className="text-[#8D8D8C] font-semibold mb-5 text-[1.25rem]">
                      Services
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="#"
                          className="text-[#F0F0F0] hover:text-white transition-colors block"
                        >
                          Residential Construction
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#F0F0F0] hover:text-white transition-colors block"
                        >
                          Commercial Construction
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#F0F0F0] hover:text-white transition-colors block"
                        >
                          Property Management
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#F0F0F0] hover:text-white transition-colors block"
                        >
                          Development Services
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="px-4">
                    <h3 className="text-[#8D8D8C] font-semibold mb-5 text-[1.25rem]">
                      Contact Us
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="#"
                          className="text-[#F0F0F0] hover:text-white transition-colors block"
                        >
                          Contact Form
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#F0F0F0] hover:text-white transition-colors block"
                        >
                          Our Offices
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="w-full py-3 bg-[#201F1F]">
        <div className="max-w-328 mx-auto px-3 md:px-3 lg:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500">
              @2024 Pinnacle. All Rights Reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5 text-[#F0F0F0]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-[#F0F0F0]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5 text-[#F0F0F0]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5 text-[#F0F0F0]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
