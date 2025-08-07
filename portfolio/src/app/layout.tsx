import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
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
  title: "Nick Vinokour — Portfolio",
  description: "Software engineer focused on building reliable, performant products.",
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: '/nv-logo.png',
    apple: '/nv-logo.png',
  },
  openGraph: {
    title: "Nick Vinokour — Portfolio",
    description:
      "Software engineer focused on building reliable, performant products.",
    url: "/",
    siteName: "Nick Vinokour",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nick Vinokour — Portfolio",
    description:
      "Software engineer focused on building reliable, performant products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0a2a6c" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
