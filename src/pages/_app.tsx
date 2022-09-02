/* eslint-disable react/jsx-props-no-spreading */
import { useMemo } from 'react'
import { AppProps } from 'next/app'

import '@/styles/tailwind.css'
import { ImageContext } from '@/hooks/useImagePlaceholder'
import { Layout } from '@/components/layout/Layout'

const App = ({ Component, pageProps }: AppProps) => {
  const imageContext = useMemo(() => {
    return pageProps.imagePlaceholders || new Map()
  }, [pageProps])

  return (
    <ImageContext.Provider value={imageContext}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ImageContext.Provider>
  )
}

export default App
