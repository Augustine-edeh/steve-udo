import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stephen Udo - Portfolio",
  keywords: ["Stephen Udo", "Portfolio", "Web Developer", "Software Engineer"],
  authors: [{ name: "Augustine Edeh ", url: "https://augustines.vercel.app" }],
  creator: "Augustine Edeh",
  openGraph: {
    title: "Stephen Udo - Portfolio",
    description:
      "Portfolio of Stephen Udo, a web developer and software engineer.",
  },
  description: "Software developer and UI/UX designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
