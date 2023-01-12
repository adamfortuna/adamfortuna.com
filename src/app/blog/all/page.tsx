import Link from 'next/link'
import { ArticlesList } from '@/components/articles/ArticlesList'
import BlogAboutCallout from '@/components/articles/BlogAboutCallout'
import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'

export default async function BlogAllPage() {
  const articles = await getRecentPosts({ count: 1000 })

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
      <ArticlesList articles={articles} />
    </>
  )
}
