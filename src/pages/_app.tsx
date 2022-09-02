/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { AppProps } from 'next/app'

import '@/styles/tailwind.css'
import { ImageContext } from '@/hooks/useImagePlaceholder'
import { Layout } from '@/components/layout/Layout'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ImageContext.Provider value={pageProps.imagePlaceholders}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ImageContext.Provider>
  )
}

export default App
