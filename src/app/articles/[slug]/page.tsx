import { getPostBySlug } from '@/queries/wordpress/getPostBySlug'
import { ArticleContentHtml } from '@/components/articles/ArticleContent'
import { ArticleHeader } from '@/components/articles/ArticleHeader'

interface PageProps {
  params: any
  children?: React.ReactNode
}
export const revalidate = 60
export default async function Page({ params }: PageProps) {
  const article = await getPostBySlug(params.slug)
  if (!article) return null

  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row-reverse mx-auto w-full justify-center">
        <div className="lg:mx-auto flex-1 lg:flex-none justify-center">
          <ArticleHeader article={article} />
          <ArticleContentHtml article={article} />
        </div>
      </div>
    </div>
  )
}
