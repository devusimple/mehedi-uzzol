import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Mehedi Hasan - Programmer & Freelancer",
  description:
    "Portfolio of Mehedi Hasan - Part-time programmer, freelancer, and BSc Physics student specializing in React, Go, ML, Android development, and more.",
  keywords: ["Mehedi Hasan", "programmer", "freelancer", "React", "Go", "Android", "ML", "web developer"],
  authors: [{ name: "Mehedi Hasan" }],
  creator: "Mehedi Hasan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mehedi-portfolio.vercel.app",
    title: "Mehedi Hasan - Programmer & Freelancer",
    description: "Portfolio showcasing projects in React, Go, ML, Android development and more.",
    siteName: "Mehedi Hasan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehedi Hasan - Programmer & Freelancer",
    description: "Portfolio showcasing projects in React, Go, ML, Android development and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
