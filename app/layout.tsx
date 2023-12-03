import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayush Website",
  description: "Creative portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="cyberpunk">
      <body className={inter.className}>
        <div className="container mx-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
