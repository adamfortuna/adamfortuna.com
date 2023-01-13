import 'server-only'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArticlesList } from '@/components/articles/ArticlesList'
import BlogAboutCallout from '@/components/articles/BlogAboutCallout'
import { getRecentPostsByTag } from '@/queries/wordpress/getRecentPostsByTag'
import { getTags } from '@/queries/wordpress/getTags'

interface PageProps {
  params: {
    slug: string
  }
}
export default async function TagPage({ params: { slug } }: PageProps) {
  const { articles, tag } = await getRecentPostsByTag({ count: 1000, tag: slug })
  if (!tag) {
    notFound()
  }

  return (
    <>
      <p className="font-handwriting text-2xl md:text-4xl lg:text-6xl text-blue-700 mb-2 flex flex-wrap items-baseline">
        <span>
          <Link href="/blog" className="underline hover:no-underline">
            Blog
          </Link>
        </span>
        <span className="text-2xl mx-2">/</span>
        <span>
          <Link href="/blog/tags" className="underline hover:no-underline">
            Tags
          </Link>
        </span>
        <span className="text-2xl mx-2">/</span>
        <span>{tag.name}</span>
      </p>
      <BlogAboutCallout />

      {tag.description?.length && (
        <div className="mt-4 lg:mt-8">
          <h2 className="font-handwriting text-xl md:text-2xl text-blue-700 mb-2">About this Tag</h2>
          <p className="text-gray-600 max-w-3xl">{tag.description}</p>
        </div>
      )}
      <ArticlesList articles={articles} />
    </>
  )
}

export async function generateStaticParams() {
  const tags = await getTags()

  return tags
    .filter((t) => t.count && t.count > 0)
    .map((tag) => ({
      slug: tag.slug,
    }))
}
