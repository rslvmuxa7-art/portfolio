import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Muhammadqodir Rasuljonov | Portfolio",
  description: "Kreativ, zamonaviy va responsiv frontend portfolio. Ishlayotgan loyihalar, ko‘nikmalar va aloqa ma’lumotlari.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full bg-[var(--page-bg)] text-[var(--foreground)]">{children}</body>
    </html>
  );
}
