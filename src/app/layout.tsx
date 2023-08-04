import './globals.css'
import type { Metadata } from 'next'

import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

export const metadata: Metadata = {
  title: 'Sastodeal Clone',
  description: 'Online shopping in Nepal | Buy online in Nepal | Online store nepal | Online clothing store in Nepal | Sastodeal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-base-background-color'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
