import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Modern Landing Page - Your Success Starts Here",
  description: "Transform your business with our innovative solutions. Join thousands of satisfied customers who have achieved remarkable results.",
  keywords: "landing page, business solutions, innovation, growth",
  authors: [{ name: "Your Company" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3b82f6",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}