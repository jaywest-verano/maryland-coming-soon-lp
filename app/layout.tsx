import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { cn } from "@/lib/utils"

// Define local fonts
const jost = localFont({
  src: "../public/fonts/Jost-Bold.ttf",
  weight: "700", // Bold weight
  variable: "--font-jost",
  display: "swap",
})

const afacad = localFont({
  src: "../public/fonts/Afacad-Regular.ttf",
  weight: "400", // Regular weight
  variable: "--font-afacad",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Illinois Zen Leaf - Select Location",
  description: "Choose your Illinois Zen Leaf dispensary location to continue.",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "Illinois Zen Leaf - Select Location",
    description: "Choose your Illinois Zen Leaf dispensary location to continue.",
    url: "https://zenleafdispensaries.com/",
    siteName: "Zen Leaf Dispensaries",
    images: [
      {
        url: '/zen-leaf-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Zen Leaf Dispensaries',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Illinois Zen Leaf - Select Location",
    description: "Choose your Illinois Zen Leaf dispensary location to continue.",
    images: ['/zen-leaf-og.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          jost.variable, // Make Jost available as a CSS variable
          afacad.variable, // Make Afacad available as a CSS variable and set as default
        )}
      >
        {children}
      </body>
    </html>
  )
}
