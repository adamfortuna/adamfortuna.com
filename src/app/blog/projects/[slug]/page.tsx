import Link from 'next/link'
import { ArticlesList } from '@/components/articles/ArticlesList'
import BlogAboutCallout from '@/components/articles/BlogAboutCallout'
import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'
import { WordpressClientIdentifier } from '@/types'

const titleize = (category: WordpressClientIdentifier) => {
  switch (category) {
    case 'minafi':
      return 'Minafi'
    case 'hardcover':
      return 'Hardcover'
    default:
      return 'Adam Fortuna'
  }
}

interface PageProps {
  params: {
    slug: WordpressClientIdentifier
  }
  children?: React.ReactNode
}
export default async function BlogProjectPage({ params: { slug } }: PageProps) {
  const articles = await getRecentPosts({ count: 1000, projects: [slug] })

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
          <Link href="/blog/projects" className="underline hover:no-underline">
            Projects
          </Link>
        </span>
        <span className="text-2xl mx-2">/</span>
        <span>{titleize(slug)}</span>
      </p>
      <BlogAboutCallout />

      <ArticlesList articles={articles} />
    </>
  )
}

export async function generateStaticParams() {
  const projects = ['adamfortuna', 'hardcover', 'minafi']

  return projects.map((project) => ({
    slug: project,
  }))
}
