// import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Header /> */}
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
