import Head from 'next/head'
import { NextPage } from 'next'

import { Footer } from '@/components/tailwind/Footer'
import { Header } from '@/components/tailwind/Header'
import { Hero } from '@/components/marketing/Hero'
import { Projects } from '@/components/projects/Projects'


const Home: NextPage = () => {
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
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default Home


