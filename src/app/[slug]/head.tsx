import { notFound } from 'next/navigation'
import { getPostOrPageBySlug } from '@/queries/wordpress/getPostOrPageBySlug'
import ArticleMetadata from '@/components/articles/ArticleMetadata'
import GlobalHead from '../globalHead'

export const revalidate = 600 // 10 minutes
const Head = async ({ params }: { params: { slug: string } }) => {
  const article = await getPostOrPageBySlug(params.slug)
  if (!article) {
    notFound()
  }

  return (
    <>
      <title>{article.title}</title>
      <GlobalHead />
      <ArticleMetadata article={article} />
    </>
  )
}
export default Head
