import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Muhammadqodir | Portfolio",
  description: "Modern portfolio website for Muhammadqodir with interactive background, project showcase, skills, and Telegram contact form.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full bg-[#050816] text-slate-100">{children}</body>
    </html>
  );
}
