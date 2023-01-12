import { getPostOrPageBySlug } from '@/queries/wordpress/getPostOrPageBySlug'
import { ArticleContentHtml } from '@/components/articles/ArticleContent'
import { ArticleHeader } from '@/components/articles/ArticleHeader'

interface PageProps {
  params: any
  children?: React.ReactNode
}
export const revalidate = 60 * 60 // 60 minutes
export default async function Page({ params }: PageProps) {
  const article = await getPostOrPageBySlug(params.slug)
  if (!article) return null

  return (
    <>
      <ArticleHeader article={article} />
      <ArticleContentHtml article={article} />
    </>
  )
}
