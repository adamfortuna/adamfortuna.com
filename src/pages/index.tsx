import { NextPage } from 'next'
import { Hero } from '@/components/marketing/Hero'

export interface Props {}

const Home: NextPage<Props> = () => {
  return (
    <main>
      <Hero />
    </main>
  )
}

export default Home
