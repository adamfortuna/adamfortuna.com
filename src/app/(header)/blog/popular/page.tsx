import Link from 'next/link'
import { ArticlesList } from '@/components/articles/ArticlesList'
import BlogAboutCallout from '@/components/articles/BlogAboutCallout'
import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'
import { sortByCommentsDesc } from '@/lib/wordpressClient'
import { Article } from '@/types'

export const revalidate = 3600

export interface PageProps {
  params: {
    page?: string
  }
}

const PER_PAGE = Number(process.env.NEXT_PUBLIC_ARTICLES_PER_PAGE)

export default async function BlogPopularPage({ params: { page } }: PageProps) {
  const currentPage = page ? Number(page) : 1
  const { articles, totalPages } = await getRecentPosts({
    count: PER_PAGE,
    offset: (currentPage - 1) * PER_PAGE,
    sortBy: sortByCommentsDesc,
    filterBy: (article: Article) => article.commentCount > 0,
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
        <span>Popular</span>
      </p>

      <BlogAboutCallout />
      <ArticlesList
        articles={articles}
        page={currentPage}
        totalPages={totalPages}
        showSeparator={false}
        url="/blog/popular"
      />
    </>
  )
}
