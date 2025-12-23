import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'The Beacon HQ',
  description: 'Play live games like BORDERLAND and discover what\'s next in our arcade universe.',
  openGraph: {
    title: 'The Beacon HQ - The Next-Gen Arcade',
    description: 'Play live games like BORDERLAND and discover what\'s next in our arcade universe.',
    url: 'https://thebeaconhq.com',
    siteName: 'The Beacon HQ',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Beacon HQ - The Next-Gen Arcade',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Beacon HQ - The Next-Gen Arcade',
    description: 'Play live games like BORDERLAND and discover what\'s next in our arcade universe.',
    images: ['/images/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>📡</text></svg>" />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
