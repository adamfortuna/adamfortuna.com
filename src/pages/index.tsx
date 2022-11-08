import { NextPage } from 'next'
import { Hero } from '@/components/marketing/Hero'

export interface Props {}

const Home: NextPage<Props> = () => {
  return <Hero />
}

export default Home
