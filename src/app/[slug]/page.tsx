import { notFound } from 'next/navigation'
import { getPostOrPageBySlug } from '@/queries/wordpress/getPostOrPageBySlug'
import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'
import { Article } from '@/components/articles/Article'

interface PageProps {
  params: {
    slug: string
  }
}

export default async function Page({ params: { slug } }: PageProps) {
  const article = await getPostOrPageBySlug(slug)
  if (!article) {
    notFound()
  }

  return <Article article={article} />
}

export async function generateStaticParams() {
  const { articles } = await getRecentPosts({
    count: 1000,
    projects: ['adamfortuna'],
  })

  return articles
    .map((article) => ({
      slug: article.slug,
    }))
    .concat({ slug: 'about' }, { slug: 'now' })
}
