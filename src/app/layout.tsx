import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Lora } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

/** Display serif. Self-hosted at build time by next/font — no runtime request. */
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.role}`,
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.description,
    type: "profile",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  colorScheme: "light",
  // The desktop is a fixed surface; letting it zoom breaks window dragging.
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lora.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
