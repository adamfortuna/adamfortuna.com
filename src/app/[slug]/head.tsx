/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { getPostBySlug } from '@/queries/wordpress/getPostBySlug'

export const revalidate = 60 * 60 // 60 minutes
const Head = async ({ params }: { params: { slug: string } }) => {
  const article = await getPostBySlug(params.slug)
  if (!article) return null

  return (
    <>
      <title>{article.title}</title>
      <meta name="viewport" content="width=device-width" />
      <link rel="alternate" type="application/rss+xml" href={`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/feed`} />
      <meta property="og:title" content={article.title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_VERCEL_URL}/${article.slug}`} />

      {article.featuredImage && (
        <>
          <meta property="og:image" content={article.featuredImage.sourceUrl} />
          {article.featuredImage.mediaDetails && (
            <>
              <meta property="og:image:width" content={String(article.featuredImage.mediaDetails.width)} />
              <meta property="og:image:height" content={String(article.featuredImage.mediaDetails.height)} />
            </>
          )}
        </>
      )}
      <meta property="og:description" content={article.excerpt} />
      <meta name="description" content={article.excerpt} />

      <meta property="article:published_time" content={article.date} />
      <meta property="article:author" content="Adam Fortuna" />
      <meta property="article:section" content="Technology" />
      <meta property="article:tag" content={article.tags?.map((t) => t.name).join(',')} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@adamfortuna" />
    </>
  )
}
export default Head
