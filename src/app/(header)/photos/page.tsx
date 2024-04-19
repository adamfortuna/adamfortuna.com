import PhotosList from '@/components/photos/PhotosList'
import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'
import { Container } from '@/components/layout/Container'
import { PageFooter } from '@/components/layout/PageFooter'
import { PhotoPost } from '@/types'

export const dynamic = 'force-static'
export const revalidate = 3600

export interface PageProps {
  params: {
    page?: string
  }
}

const PER_PAGE = Number(process.env.NEXT_PUBLIC_ARTICLES_PER_PAGE)

export default async function BlogPhotosPage({ params: { page } }: PageProps) {
  const currentPage = page ? Number(page) : 1
  const { articles, totalPages } = await getRecentPosts({
    projects: ['adamfortuna'],
    type: 'photos',
    count: PER_PAGE,
    offset: (currentPage - 1) * PER_PAGE,
  })
  const rootArticles = (articles as PhotoPost[]).filter((article) => article.root)

  return (
    <>
      <Container className="max-w-3xl">
        <div className="prose dark:prose-invert">
          <h1 className="font-handwriting text-6xl text-blue-700 mb-2" style={{ marginTop: '0' }}>
            Photosets
          </h1>
          <p>
            I got my first digital camera in the year 2000. One of my first photo albumns was a PHP blog to share those
            photos with friends.
          </p>
          <p>
            In the many years since then, I've upgraded my camera (and blog) many times. From pocket sized Cannon
            Camera, to an iPhone, to a Fuji XT-1 - my current goto.
          </p>
          <p>Here are a few of my favorite photo stories. 📸</p>
        </div>

        <div className="pt-12" />

        <PhotosList articles={rootArticles} page={currentPage} totalPages={totalPages} url="/blog/photos" />
      </Container>

      <PageFooter />
    </>
  )
}
