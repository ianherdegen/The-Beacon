import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

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
        <div className="min-h-screen bg-black flex flex-col">
          {/* Arcade Floor Pattern */}
          <div className="fixed inset-0 opacity-5 pointer-events-none z-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255, 255, 255, 0.03) 60px, rgba(255, 255, 255, 0.03) 61px),
                             repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255, 255, 255, 0.03) 60px, rgba(255, 255, 255, 0.03) 61px)`
          }} />
          <Navbar />
          <main className="flex-1 relative z-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
