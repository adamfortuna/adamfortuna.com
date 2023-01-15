import Link from 'next/link'
import { ArticlesList } from '@/components/articles/ArticlesList'
import BlogAboutCallout from '@/components/articles/BlogAboutCallout'
import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'

export interface PageProps {
  params: {
    page?: string
  }
}

export const PER_PAGE = Number(process.env.NEXT_PUBLIC_ARTICLES_PER_PAGE)

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
      <ArticlesList articles={articles} page={1} totalPages={totalPages} url="/blog/all" />
    </>
  )
}
