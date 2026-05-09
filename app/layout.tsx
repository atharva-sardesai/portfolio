import type { Metadata } from "next"
import { Playfair_Display, DM_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/Navbar"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: {
    default: "Atharva Sardesai | Enterprise Security",
    template: "%s | Atharva Sardesai"
  },
  description: "Enterprise security practitioner writing on cyber risk, governance, and the gap between strategy and reality.",
  authors: [{ name: "Atharva" }],
  creator: "Atharva",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://atharvasardesai.com",
    siteName: "Atharva Sardesai",
    title: "Atharva Sardesai | Enterprise Security",
    description: "Enterprise security practitioner writing on cyber risk, governance, and the gap between strategy and reality.",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Atharva Sardesai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atharva Sardesai | Enterprise Security",
    description: "Enterprise security practitioner writing on cyber risk, governance, and the gap between strategy and reality.",
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
  metadataBase: new URL('https://atharvasardesai.com'),
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
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
