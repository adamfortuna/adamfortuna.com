import { notFound } from 'next/navigation'
import { getPostOrPageBySlug } from '@/queries/wordpress/getPostOrPageBySlug'
// import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'
import { PhotoArticle } from '@/components/photos/PhotoArticle'

interface PageProps {
  params: {
    slug: string[]
  }
}

export const revalidate = 3600

export default async function Page({ params: { slug } }: PageProps) {
  const article = await getPostOrPageBySlug(['photos', ...slug].join('/'))
  if (!article) {
    notFound()
  }

  return <PhotoArticle article={article} />
}

// export async function generateStaticParams() {
//   const { articles } = await getRecentPosts({
//     count: 1000,
//     projects: ['adamfortuna'],
//   })

//   return articles
//     .map((article) => ({
//       slug: article.slug,
//     }))
//     .concat({ slug: 'about' }, { slug: 'now' })
// }
