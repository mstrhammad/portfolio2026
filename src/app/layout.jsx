import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
export const config = {
  runtime: 'experimental-edge', // Disable Vercel's Dev Overlay
};

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Mstr Hammad's personal website",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex w-full">
          <div className="w-[15%] relative hidden lg:block">
            <Navbar />
          </div>
          <div className=" max-h-screen w-full lg:w-[86%]">{children}</div>

        </div>
      </body>
    </html>
  );
}
