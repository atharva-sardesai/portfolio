import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Cyber with Atharva | Cybersecurity Consultant & Cloud Security Strategist",
    template: "%s | Cyber with Atharva"
  },
  description: "Cybersecurity Consultant specializing in Cloud Security, GRC, DevSecOps strategy, and AI governance. Bridging the gap between technical infrastructure and business risk for enterprise organizations.",
  keywords: ["Cybersecurity Consultant", "Cloud Security Strategy", "GRC", "Governance Risk Compliance", "DevSecOps", "AI Governance", "Enterprise Security", "Cloud Architecture", "Zero Trust", "Risk Advisory"],
  authors: [{ name: "Atharva" }],
  creator: "Atharva",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cyberwithatharva.github.io/cyber-portfolio",
    siteName: "Cyber with Atharva",
    title: "Cyber with Atharva | Cybersecurity Consultant & Cloud Security Strategist",
    description: "Cybersecurity Consultant specializing in Cloud Security, GRC, DevSecOps strategy, and AI governance for enterprise organizations.",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Cyber with Atharva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber with Atharva | Cybersecurity Consultant & Cloud Security Strategist",
    description: "Cybersecurity Consultant specializing in Cloud Security, GRC, DevSecOps strategy, and AI governance.",
    creator: "@NullSecures",
    images: ["/icon.png"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
  },
  metadataBase: new URL('https://cyberwithatharva.github.io/cyber-portfolio'),
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} min-h-screen bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="container mx-auto">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'