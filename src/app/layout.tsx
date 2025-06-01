
import type { Metadata } from "next";
import { Madimi_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const madimiOne = Madimi_One({
  variable: "--font-madimi-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Ruben Yanez | Portfolio",
    template: "%s | Ruben Yanez",
  },
  description: "Explore the portfolio of Ruben Yanez, a passionate developer showcasing projects, skills, and experience.",
  authors: [{ name: "Ruben Yanez" }],
  keywords: [
    "Ruben Yanez",
    "portfolio",
    "web developer",
    "projects",
    "software engineer",
    "frontend",
    "typescript",
    "react",
  ],
  openGraph: {
    title: "Ruben Yanez | Portfolio",
    description: "Explore the portfolio of Ruben Yanez, a passionate developer showcasing projects, skills, and experience.",
    url: "https://rubenyh.com",
    siteName: "Ruben Yanez Portfolio",
    type: "website",
    locale: "en_US",
  },
  metadataBase: new URL("https://rubenyh.com"),
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${madimiOne.variable} antialiased bg-black`} >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
