/* eslint-disable react/function-component-definition */

import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="antialiased" lang="en">
      <Head />
      <body className="flex flex-col bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
