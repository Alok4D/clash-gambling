"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Sports", href: "/sports" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className="fixed left-0 right-0 z-50 px-4 md:px-0">
      <div className="mx-auto max-w-[1200px]">
        {/* Main Navbar Container */}
        <div className="relative flex h-20 items-center justify-between rounded-2xl border border-white/10 bg-[#1A1C1E]/80 px-6 backdrop-blur-xl lg:px-10">

          {/* Logo Section */}
          <div className="flex shrink-0 items-center">
            <Link href="/" className="flex flex-col items-center">
              <Image src="/footer-image/Group 1171275819.svg" alt="Footer Logo" width={100} height={100} className="w-[55px] h-[42px]" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 md:flex font-montserrat">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-white/80 transition-colors hover:text-[#00FFA3]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Log In Button (Desktop) */}
          <div className="hidden md:block">
         <Link href="/login">
          <button className="rounded-lg bg-[#00FFA3] px-8 py-2.5 text-sm font-bold text-black transition-all hover:bg-[#00e692] active:scale-95 shadow-[0_0_15px_rgba(0,255,163,0.3)]">
              Log In
            </button>
         </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="mt-2 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#1A1C1E] p-6 shadow-2xl md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white hover:text-[#00FFA3]"
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-white/10" />
            <button className="w-full rounded-xl bg-[#00FFA3] py-4 text-lg font-bold text-black">
              Log In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;