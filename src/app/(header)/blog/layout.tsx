import { Container } from '@/components/layout/Container'
import ArticleSidebar from '@/components/articles/sidebar'
import { PageFooter } from '@/components/layout/PageFooter'

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container className="grid grid-cols-12 mx-auto md:space-x-4">
        <ArticleSidebar />

        <div className="col-span-12 md:col-span-9 xl:col-span-10 p-2 md:p-0">{children}</div>
      </Container>

      <PageFooter />
    </>
  )
}

export default BlogLayout
