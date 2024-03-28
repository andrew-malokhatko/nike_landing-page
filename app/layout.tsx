import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "@/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nike, Sneaker Shop",
  description: "Buy brand-new Nike sneakers fast and easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Nav />
        {children}
      </body>
    </html>
  );
}
