import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dhruv Dankhara | MERN Stack Developer",
  description:
    "Personal portfolio, skills showcase, and blog built with Next.js, Tailwind CSS, and MongoDB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-gray-100`}>
        <div className="max-w-[1400px] mx-auto bg-white border-x-2 border-black min-h-screen flex flex-col">
          <Navbar />
          <main className="pt-[3.8rem] flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
