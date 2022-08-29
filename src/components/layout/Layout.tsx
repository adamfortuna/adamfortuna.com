import Head from 'next/head'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export const Layout = ({children}:any) => {
  return (
    <>
      <Head>
        <title>👋 Hey hey! I'm Adam.</title>
        <meta
          name="description"
          content="Hey hey! I'm a Adam Fortuna. I create stuff online for fun."
        />
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}