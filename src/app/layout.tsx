/* eslint-disable @next/next/no-head-element */

import '@/styles/tailwind.css'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

import { Pacifico } from '@next/font/google'

const pacifico = Pacifico({
  weight: '400',
  variable: '--font-handwriting',
  display: 'swap',
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={`${pacifico.variable} h-full antialiased`} lang="en">
      <head />
      <body className="flex h-full flex-col bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
export default RootLayout
