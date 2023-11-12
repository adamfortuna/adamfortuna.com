import { PageFooter } from '@/components/layout/PageFooter'

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}

      <PageFooter />
    </>
  )
}

export default BlogLayout
