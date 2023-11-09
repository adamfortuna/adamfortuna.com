import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FooterDivider } from '@/components/layout/FooterDivider'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FooterDivider />
      <Footer />
    </>
  )
}
export default Layout
