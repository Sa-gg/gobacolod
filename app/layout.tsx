import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GoBacolod - Smart Travel & Commute for Bacolod City",
  description: "Navigate Bacolod with AI-powered route suggestions and real-time e-jeepney information",
  generator: 'Next.js',
  keywords: ['Bacolod', 'jeepney', 'transportation', 'Philippines', 'travel', 'commute', 'AI assistant'],
  authors: [{ name: 'GoBacolod Team' }],
  creator: 'GoBacolod',
  publisher: 'GoBacolod',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://gobacolod.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'GoBacolod - Smart Travel & Commute for Bacolod City',
    description: 'Navigate Bacolod with AI-powered route suggestions and real-time e-jeepney information',
    url: '/',
    siteName: 'GoBacolod',
    images: [
      {
        url: '/placeholder.svg',
        width: 1200,
        height: 630,
        alt: 'GoBacolod - Smart Transportation for Bacolod City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoBacolod - Smart Travel & Commute for Bacolod City',
    description: 'Navigate Bacolod with AI-powered route suggestions and real-time e-jeepney information',
    images: ['/placeholder.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
