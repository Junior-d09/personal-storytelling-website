import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Junior Dofonsou | Full-Stack Developer",
    template: "%s | Junior Dofonsou",
  },
  description:
    "Full-Stack Developer & Digital Creator building modern web experiences with React, Next.js and TypeScript.",
  keywords: [
    "Junior Dofonsou",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Web Development",
    "Africa Developer",
  ],
  authors: [{ name: "Junior Dofonsou" }],
  creator: "Junior Dofonsou",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Junior Dofonsou | Portfolio",
    description:
      "Building dreams through code, vision and creativity.",
    type: "website",
    locale: "en_US",
    siteName: "Junior Dofonsou Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Junior Dofonsou | Portfolio",
    description:
      "Full-Stack Developer & Digital Creator",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased min-h-screen bg-background text-foreground overflow-x-hidden">
        {children}

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}