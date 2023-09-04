import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const pop = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'FRAMER MOTION BASICS',
  description: 'Created by the founder of bluelands',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pop.className}>{children}</body>
    </html>
  )
}
