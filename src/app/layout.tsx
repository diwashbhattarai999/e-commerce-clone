import './globals.css'
import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}
