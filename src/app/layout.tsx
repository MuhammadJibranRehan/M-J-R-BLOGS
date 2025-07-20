import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M Jibran Rehan Blog",
  description: "Explore programming, AI, and tech by Muhammad Jibran Rehan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Add AdSense script safely using next/script */}
      <head>
        <Script
          id="adsense-script"
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7372657345450883"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-gray-900 shadow-lg">
          <nav className="max-w-screen-xl mx-auto px-4 py-5">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-white">
                M Jibran Rehan BLOG
              </Link>
            </div>
          </nav>
        </header>

        {/* Optional: Place your AdSense ad unit here */}
        {/* Example of a responsive ad unit */}
        <div className="my-6 flex justify-center">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-7372657345450883"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <Script id="adsbygoogle-init" strategy="afterInteractive">
            {`(adsbygoogle = window.adsbygoogle || []).push({});`}
          </Script>
        </div>

        {children}

        <footer className="bg-gray-900 py-6">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} M Jibran Rehan Blog. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
