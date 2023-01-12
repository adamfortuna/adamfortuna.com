import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
