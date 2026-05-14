import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Junior Dofonsou | Full-Stack Developer & Digital Creator",
  description:
    "Building dreams through code, vision and creativity. A self-taught developer and visionary from Africa creating modern digital experiences.",
  keywords: [
    "Junior Dofonsou",
    "Full-Stack Developer",
    "Digital Creator",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Africa",
  ],
  authors: [{ name: "Junior Dofonsou" }],
  creator: "Junior Dofonsou",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
