import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhishek Rajpurohit | Portfolio",
  description:
    "3rd-year CS (IoT & Cybersecurity) student building full-stack and AI-driven applications, with hands-on ML experience in threat intelligence.",
  keywords: [
    "Abhishek Rajpurohit",
    "portfolio",
    "full-stack developer",
    "cybersecurity",
    "AI",
    "machine learning",
    "React",
    "Next.js",
    "Python",
  ],
  authors: [{ name: "Abhishek Rajpurohit" }],
  openGraph: {
    title: "Abhishek Rajpurohit | Portfolio",
    description:
      "3rd-year CS (IoT & Cybersecurity) student building full-stack and AI-driven applications, with hands-on ML experience in threat intelligence.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Rajpurohit | Portfolio",
    description:
      "3rd-year CS (IoT & Cybersecurity) student building full-stack and AI-driven applications, with hands-on ML experience in threat intelligence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
