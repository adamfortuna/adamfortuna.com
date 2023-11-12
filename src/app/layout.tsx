import '@/styles/tailwind.css'
import '@/styles/modula.css'

import { Pacifico, Inter } from 'next/font/google'
import PlausibleAnalytics from '@/components/PlausibleAnalytics'
import { Metadata, Viewport } from 'next'

const pacifico = Pacifico({
  weight: '400',
  variable: '--font-handwriting',
  display: 'swap',
  subsets: ['latin'],
  preload: true,
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
})

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
}

// <link href="https://github.com/adamfortuna" rel="me" />
// <link rel="webmention" href="https://wp.adamfortuna.com/wp-json/webmention/1.0/endpoint" />
// <link rel="http://webmention.org/" href="https://wp.adamfortuna.com/wp-json/webmention/1.0/endpoint" />

export const metadata: Metadata = {
  title: {
    default: "👋 Hey hey! I'm Adam.",
    template: '%s | Adam Fortuna',
  },
  metadataBase: new URL('https://adamfortuna.com'),
  description: "Hey hey! I'm a Adam Fortuna, a full-stack product developer living in Salt Lake City, UT.",
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    types: {
      'application/rss+xml': 'https://adamfortuna.com/feed',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://adamfortuna.com',
    title: 'AdamFortuna.com',
    description: "Hey hey! I'm a Adam Fortuna, a full-stack product developer living in Salt Lake City, UT.",
    siteName: 'AdamFortuna.com',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@adamfortuna',
  },
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={`${pacifico.variable} ${inter.variable} antialiased`} lang="en">
      <body className="flex flex-col bg-white">
        {children}
        <PlausibleAnalytics />
      </body>
    </html>
  )
}

export default RootLayout
