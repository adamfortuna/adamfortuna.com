/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app'

import '@/styles/tailwind.css'
import { Layout } from '@/components/layout/Layout'
import { Pacifico } from '@next/font/google'

const pacifico = Pacifico({
  weight: '400',
  variable: '--font-handwriting',
  display: 'swap',
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <style jsx global>
        {`
          :root {
            --font-handwriting: ${pacifico.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
