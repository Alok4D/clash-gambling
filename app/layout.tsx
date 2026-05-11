import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Clash Gambling Platform",
  description: "Experience thrilling clash gambling games, exciting challenges, and competitive gameplay in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${manrope.className} antialiased`}
        style={{ "--font-title": "var(--font-sans)" } as React.CSSProperties}
      >
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
