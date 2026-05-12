import Image from "next/image";
import Link from "next/link";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundImage: `url('/footer-image/Group 2.svg')` }} className="relative w-full overflow-hidden py-16 px-6 md:px-0">

      <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center justify-center">

        {/* Logo / Branding */}
        <Link href="/" className="flex flex-col items-center mb-8">
          <Image src="/footer-image/Group 1171275819.svg" alt="Footer Logo" width={100} height={100} className="w-[131px] h-[96px]" />

        </Link>

        {/* Copyright */}
        <div 
          style={{ 
            color: '#F2F2F2',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '24px'
          }}
          className="text-center"
        >
          © {currentYear} SharpMatrix AI. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;