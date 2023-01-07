import Head from 'next/head'
import { useRouter } from 'next/router'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export const Layout = ({ children }: any) => {
  const isHomePage = useRouter().pathname === '/'

  return (
    <>
      <Head>
        <title>👋 Hey hey! I'm Adam.</title>
        <meta
          name="description"
          content="Hey hey! I'm a Adam Fortuna, a full-stack product developer living in Salt Lake City, UT."
        />
      </Head>
      <Header isHomePage={isHomePage} />
      <main>{children}</main>

      {!isHomePage && <Footer />}
    </>
  )
}
