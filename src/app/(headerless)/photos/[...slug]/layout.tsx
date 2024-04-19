// import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PhotoHeader } from '@/components/photos/PhotoHeader'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PhotoHeader />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
