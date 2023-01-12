import { getPostOrPageBySlug } from '@/queries/wordpress/getPostOrPageBySlug'
import ArticleMetadata from '@/components/articles/ArticleMetadata'
import GlobalHead from '../globalHead'

export const revalidate = 60 * 60 // 60 minutes
const Head = async ({ params }: { params: { slug: string } }) => {
  const article = await getPostOrPageBySlug(params.slug)
  if (!article) return null

  return (
    <>
      <title>{article.title}</title>
      <GlobalHead />
      <ArticleMetadata article={article} />
    </>
  )
}
export default Head
