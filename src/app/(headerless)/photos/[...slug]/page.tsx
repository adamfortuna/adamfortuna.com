import { notFound } from 'next/navigation'
import { getPhotoBySlug } from '@/queries/wordpress/getPhotoBySlug'
// import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'
import { PhotoArticle } from '@/components/photos/PhotoArticle'
import { PhotoPost } from '@/types'

interface PageProps {
  params: {
    slug: string[]
  }
}
export const dynamic = 'force-static'
export const revalidate = 3600

export default async function Page({ params: { slug } }: PageProps) {
  const article = await getPhotoBySlug(['photos', ...slug].join('/'))
  if (!article) {
    notFound()
  }

  return <PhotoArticle article={article as PhotoPost} />
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
