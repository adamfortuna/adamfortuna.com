/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
