import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Pergemine Tunisia | Entrepreneur de forage",
  description:
    "Pergemine Tunisia – Entrepreneur de forage terrestre depuis 2005, filiale de Pergemine S.P.A (Italie).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-white text-brand-dark">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}