import { Geist, Geist_Mono } from "next/font/google";
import type { Viewport } from "next";
import { DocumentLang } from "@/components/DocumentLang";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#4a7c6c",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans selection:bg-[color-mix(in_oklab,var(--sky-soft)_65%,transparent)] selection:text-[var(--foreground)]">
        <DocumentLang />
        {children}
      </body>
    </html>
  );
}
