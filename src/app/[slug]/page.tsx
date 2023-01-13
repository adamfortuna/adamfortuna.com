import { notFound } from 'next/navigation'
import { getPostOrPageBySlug } from '@/queries/wordpress/getPostOrPageBySlug'
import { ArticleContentHtml } from '@/components/articles/ArticleContent'
import { ArticleHeader } from '@/components/articles/ArticleHeader'
import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'

interface PageProps {
  params: any
  children?: React.ReactNode
}
export const revalidate = 60 * 60 // 60 minutes
export default async function Page({ params }: PageProps) {
  const article = await getPostOrPageBySlug(params.slug)
  if (!article) {
    notFound()
  }

  return (
    <>
      <ArticleHeader article={article} />
      <ArticleContentHtml article={article} />
    </>
  )
}

export async function generateStaticParams() {
  const articles = await getRecentPosts({ count: 1000, projects: ['adamfortuna'] })

  return articles
    .map((article) => ({
      slug: article.slug,
    }))
    .concat({ slug: 'about' }, { slug: 'now' })
}
