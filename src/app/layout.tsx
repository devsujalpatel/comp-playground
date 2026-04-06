import type { Metadata } from "next";
import "lenis/dist/lenis.css";

import {
  Geist,
  Geist_Mono,
  Inter,
  Outfit,
  Signika,
  EB_Garamond,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { SmoothScroller } from "@/components/smooth-scroller";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const signika = Signika({ subsets: ["latin"], variable: "--font-signika" });
const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
});

export const metadata: Metadata = {
  title: "Component Playground",
  description: "A playground for testing and showcasing UI components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, ebGaramond.variable)}
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${signika.variable} ${ebGaramond.variable} antialiased ${ebGaramond.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroller>{children}</SmoothScroller>
        </ThemeProvider>
      </body>
    </html>
  );
}
