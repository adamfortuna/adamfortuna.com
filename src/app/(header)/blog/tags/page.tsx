import Link from 'next/link'
import BlogAboutCallout from '@/components/articles/BlogAboutCallout'
import { getTags } from '@/queries/wordpress/getTags'

export const dynamic = 'force-static'
export const revalidate = 3600

export default async function BlogTagsPage() {
  const tags = await getTags()

  return (
    <>
      <p className="font-handwriting text-3xl md:text-4xl lg:text-6xl text-blue-700 mb-2 flex flex-wrap items-baseline">
        <span>
          <Link href="/blog" className="underline hover:no-underline">
            Blog
          </Link>
        </span>
        <span className="text-2xl mx-2">/</span>
        <span>Tags</span>
      </p>

      <BlogAboutCallout />

      <div className="pt-4">
        {tags.map((tag) => (
          <p key={tag.slug} className="p-2">
            <Link href={`/blog/tags/${tag.slug}`} className="link--blue">
              {tag.name} ({tag.count})
            </Link>
          </p>
        ))}
      </div>
    </>
  )
}
