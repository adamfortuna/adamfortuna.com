import { getPostBySlug } from '@/queries/wordpress/getPostBySlug'
import { ArticleContentHtml } from '@/components/articles/ArticleContent'
import { ArticleHeader } from '@/components/articles/ArticleHeader'

interface PageProps {
  params: any
  children?: React.ReactNode
}
export const revalidate = 60 * 60 // 60 minutes
export default async function Page({ params }: PageProps) {
  const article = await getPostBySlug(params.slug)
  if (!article) return null

  return (
    <>
      <ArticleHeader article={article} />
      <ArticleContentHtml article={article} />
    </>
  )
}
