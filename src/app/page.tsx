import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/marketing/Hero'

export const dynamic = 'force-static'
export const revalidate = 3600

export default async function HomePage() {
  return (
    <>
      <Header isHomePage />
      <Hero />
    </>
  )
}
