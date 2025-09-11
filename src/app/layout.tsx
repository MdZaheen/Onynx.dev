import type { Metadata } from "next";
import { Lexend, Lexend_Giga } from "next/font/google";
import PageAnimator from "@/components/PageAnimator";
import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import ErrorBoundary from "@/components/ErrorBoundary";
import "./globals.css";
import "@/styles/pageAnimations.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

const lexendGiga = Lexend_Giga({
  variable: "--font-lexend-giga",
  subsets: ["latin"],
  display: "swap",
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
              // Disable browser scroll restoration
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              
              // Prevent hash navigation on initial load
              function preventHashScroll() {
                if (window.location.hash && window.location.pathname === '/') {
                  // Clear hash and replace history to prevent scroll
                  const cleanUrl = window.location.origin + window.location.pathname;
                  history.replaceState(null, '', cleanUrl);
                }
                // Always scroll to top on page load
                window.scrollTo(0, 0);
              }
              
              // Execute immediately
              preventHashScroll();
              
              // Also execute on DOMContentLoaded and load events
              document.addEventListener('DOMContentLoaded', preventHashScroll);
              window.addEventListener('load', preventHashScroll);
              
              // Prevent automatic hash scrolling
              window.addEventListener('hashchange', function(e) {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo(0, 0);
                }
              });
            `,
          }}
        />
      </head>
      <body
        className={`${lexend.variable} ${lexendGiga.variable} antialiased`}
      >
        <ErrorBoundary>
          <SmoothScrolling>
            <Navbar />
            <PageAnimator>
              {children}
            </PageAnimator>
          </SmoothScrolling>
        </ErrorBoundary>
      </body>
    </html>
  );
}
