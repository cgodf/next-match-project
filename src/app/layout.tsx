import type { Metadata } from "next";
import Providers from "@/components/Providers";
import "./globals.css";

import { Inter } from "next/font/google";
import TopNav from "@/components/navbar/TopNav";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Next Match",
  description: "A Great Next Matching App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        <Providers>
          <TopNav />
          <main className="container mx-auto p-10 ">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
