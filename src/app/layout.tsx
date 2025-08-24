import type { Metadata } from "next";
import { Geist, Geist_Mono, Lexend, Lexend_Giga } from "next/font/google";
import PageAnimator from "@/components/PageAnimator";
import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import "./globals.css";
import "@/styles/pageAnimations.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const lexendGiga = Lexend_Giga({
  variable: "--font-lexend-giga",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ONYXDEV - Modern Web Development Portfolio",
  description: "ONYXDEV is a modern, sleek portfolio website showcasing creative web development with a minimalist dark-themed design and glassmorphism effects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} ${lexendGiga.variable} antialiased`}
      >
        <SmoothScrolling>
          <Navbar />
          <PageAnimator>
            {children}
          </PageAnimator>
        </SmoothScrolling>
      </body>
    </html>
  );
}
