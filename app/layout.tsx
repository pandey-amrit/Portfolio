import Link from "next/link";
import Image from "next/image";
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Amrit Pandey - Portfolio",
  description: "AI/ML Engineer and Masters Student at SUNY Buffalo",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-01-16%2022.28.57%20-%20A%20minimalist%20logo%20design%20featuring%20the%20initials%20'AP'%20on%20a%20solid%20black%20background.%20The%20initials%20should%20use%20a%20sleek,%20dark%20gradient%20color%20palette,%20such%20a-092zCygobkFR8GkZQhqK4Ksll48gYF.webp",
        sizes: "32x32",
        type: "image/webp",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.className}`}>
      <body className="bg-background text-foreground">{children}</body>
    </html>
  )
}



import './globals.css'