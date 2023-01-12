import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/marketing/Hero'

export default async function HomePage() {
  return (
    <>
      <Header isHomePage />
      <Hero />
    </>
  )
}
