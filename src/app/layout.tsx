import '@/styles/tailwind.css'
import '@/styles/modula.scss'
import 'react-tooltip/dist/react-tooltip.css'

import { Pacifico } from '@next/font/google'
import PlausibleAnalytics from '@/components/PlausibleAnalytics'

const pacifico = Pacifico({
  weight: '400',
  variable: '--font-handwriting',
  display: 'swap',
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={`${pacifico.variable} antialiased`} lang="en">
      <body className="flex flex-col bg-white">
        {children}
        <PlausibleAnalytics />
      </body>
    </html>
  )
}
export default RootLayout
