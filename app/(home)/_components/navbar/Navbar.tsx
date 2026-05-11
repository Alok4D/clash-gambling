"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/Container";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "#explore", text: "Explore" },
    { href: "#how-it-works", text: "How It Works" },
    { href: "#qna", text: "Q&A" },
    { href: "#login", text: "Login" },
    { href: "#news", text: "News" },
  ];

  return (
    <>
      <header
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-lg shadow-lg"
            : "bg-[#0A0A0A]/90 backdrop-blur-md"
        } border-b border-gray-800`}
      >
        <Container>
          <div className="flex h-14 sm:h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="flex items-center gap-2 group">
                <div className="flex justify-center items-center">
                  <Image
                    src="/footer-image/footer-logo.png"
                    alt="footer-logo"
                    height={60}
                    width={80}
                  />
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="text-sm lg:text-base font-medium text-gray-300 hover:text-white transition-colors relative group"
                >
                  {link.text}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center">
              <Button size="lg" variant="secondary">
                Get Early Access
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:bg-gray-800 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.text}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3 py-2.5 text-sm sm:text-base font-medium text-gray-300 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
                <div className="pt-4 mt-2 border-t border-gray-700 flex flex-col space-y-2">
                  <button className="px-3 py-2.5 text-sm font-medium bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
                    Get Early Access
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}

export default Navbar;
