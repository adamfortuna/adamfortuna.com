import { notFound } from 'next/navigation'
import { getPostOrPageBySlug } from '@/queries/wordpress/getPostOrPageBySlug'
import { Article } from '@/components/articles/Article'
import { Metadata } from 'next'
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'

interface PageProps {
  params: {
    slug: string
  }
}

export const revalidate = 3600

export async function generateMetadata({ params: { slug } }: PageProps): Promise<Metadata> {
  const article = await getPostOrPageBySlug(slug)

  if (!article) {
    notFound()
  }

  let openGraph: OpenGraph = {
    title: article.title,
    type: 'article',
    url: article.url,
    description: article.excerpt || article.title,
  }

  if (article.featuredImage?.sourceUrl) {
    const mediaDetails = article.featuredImage.mediaDetails
      ? {
          width: article.featuredImage.mediaDetails.width,
          height: article.featuredImage.mediaDetails.height,
        }
      : {}
    openGraph = {
      ...openGraph,
      images: [
        {
          url: article.featuredImage.sourceUrl,
          ...mediaDetails,
        },
      ],
    }
  }

  // <meta property="article:published_time" content={article.date} />
  // <meta property="article:author" content="Adam Fortuna" />
  // <meta property="article:section" content="Technology" />
  // {article.tags && article.tags.length > 0 && (
  //   <meta property="article:tag" content={article.tags?.map((t) => t.name).join(',')} />
  // )}

  // <meta name="twitter:card" content="summary" />
  // <meta name="twitter:creator" content="@adamfortuna" />

  return {
    title: article.title,
    description: article.excerpt || article.title,
    openGraph,
  }
}

export default async function Page({ params: { slug } }: PageProps) {
  const article = await getPostOrPageBySlug(slug)
  if (!article) {
    notFound()
  }

  return <Article article={article} />
}

export async function generateStaticParams() {
  const { articles } = await getRecentPosts({
    count: 25,
    projects: ['adamfortuna'],
  })

  return articles
    .map((article) => ({
      slug: article.slug,
    }))
    .concat(
      { slug: 'about' },
      { slug: 'favs' },
      { slug: 'goals' },
      { slug: 'now' },
      { slug: 'beliefs' },
      { slug: 'uses' },
    )
}
