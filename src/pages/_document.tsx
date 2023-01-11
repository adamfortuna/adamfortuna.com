/* eslint-disable react/no-danger, react/function-component-definition */
import { Head, Html, Main, NextScript } from 'next/document'

/*
const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`
*/

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        {/* <script dangerouslySetInnerHTML={{ __html: modeScript }} /> */}
        <meta name="viewport" content="width=device-width" />
        <link rel="alternate" type="application/rss+xml" href={`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/feed`} />
      </Head>
      <body className="flex h-full flex-col bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
