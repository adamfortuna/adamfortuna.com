import { notFound } from 'next/navigation'
import { getPostOrPageBySlug } from '@/queries/wordpress/getPostOrPageBySlug'
import { ArticleContentHtml } from '@/components/articles/ArticleContent'
import { ArticleHeader } from '@/components/articles/ArticleHeader'
import { ArticleAboutAdamFooter } from '@/components/articles/ArticleAboutAdamFooter'
import { ReplyViaEmail } from '@/components/articles/ReplyViaEmail'
import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'

export const revalidate = 3600 // 60 minutes

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

  return (
    <>
      <ArticleHeader article={article} />
      <ArticleContentHtml article={article} />
      <ArticleAboutAdamFooter />
      <ReplyViaEmail />
    </>
  )
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
