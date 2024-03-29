import Link from 'next/link'
import { ArticlesList } from '@/components/articles/ArticlesList'
import BlogAboutCallout from '@/components/articles/BlogAboutCallout'
import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'

export const revalidate = 3600
export const dynamic = 'force-static'

export interface PageProps {
  params: {
    page?: string
  }
}

const PER_PAGE = Number(process.env.NEXT_PUBLIC_ARTICLES_PER_PAGE)

export default async function BlogAllPage({ params: { page } }: PageProps) {
  const currentPage = page ? Number(page) : 1
  const { articles, totalPages } = await getRecentPosts({
    count: PER_PAGE,
    offset: (currentPage - 1) * PER_PAGE,
  })

  return (
    <>
      <p className="font-handwriting text-3xl md:text-4xl lg:text-6xl text-blue-700 mb-2 flex flex-wrap items-baseline">
        <span>
          <Link href="/blog" className="underline hover:no-underline">
            Blog
          </Link>
        </span>
        <span className="text-2xl mx-2">/</span>
        <span>Everything</span>
      </p>

      <BlogAboutCallout />
      <ArticlesList articles={articles} page={currentPage} totalPages={totalPages} url="/blog/all" />
    </>
  )
}
