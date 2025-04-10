import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TechForce',
  description: 'TechForce is your elite tech intelligence unit — explore device specs, expert reviews, and cutting-edge comparisons all in one futuristic platform.',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
