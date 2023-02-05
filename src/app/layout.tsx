import '@/styles/tailwind.css'
import 'react-tooltip/dist/react-tooltip.css'

import { Pacifico } from '@next/font/google'

const pacifico = Pacifico({
  weight: '400',
  variable: '--font-handwriting',
  display: 'swap',
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={`${pacifico.variable} antialiased`} lang="en">
      <body className="flex flex-col bg-white">{children}</body>
    </html>
  )
}
export default RootLayout
