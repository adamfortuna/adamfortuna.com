import Head from 'next/head'
import { useMemo } from 'react'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export const Layout = ({ children }: any) => {
  const showFooter = useMemo(() => (typeof window === 'undefined' ? true : window.location.pathname !== '/'), [])

  return (
    <>
      <Head>
        <title>👋 Hey hey! I'm Adam.</title>
        <meta
          name="description"
          content="Hey hey! I'm a Adam Fortuna, a full-stack product developer living in Salt Lake City, UT."
        />
      </Head>
      <Header />
      <main>{children}</main>

      {showFooter && <Footer />}
    </>
  )
}
