import { notFound } from 'next/navigation'
import { getPostOrPageBySlug } from '@/queries/wordpress/getPostOrPageBySlug'
import { Footer } from '@/components/layout/Footer'
import { ArticleContentHtml } from '@/components/articles/ArticleContent'
import { ArticleComments } from '@/components/articles/ArticleComments'
import { ArticleHeader } from '@/components/articles/ArticleHeader'
import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'

export const revalidate = 60 * 60 // 60 minutes

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
      {article.commentCount > 0 || article.allowComments ? (
        <div className="bg-sky-100 mt-8 border-t border-sky-200 pt-8">
          <ArticleComments article={article} />
          <Footer />
        </div>
      ) : (
        <Footer />
      )}
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
