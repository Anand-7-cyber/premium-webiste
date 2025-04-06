import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import Navbar from './navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Premium App',
  description: 'Buy and access premium content!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
