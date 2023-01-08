import { GetStaticPropsContext, NextPage } from 'next'
import Link from 'next/link'

import ArticleSidebar from '@/components/articles/sidebar'
import { ArticlesList } from '@/components/articles/ArticlesList'
import BlogAboutCallout from '@/components/articles/BlogAboutCallout'
import { Container } from '@/components/layout/Container'
import { getRecentPostsByTag } from '@/queries/wordpress/getRecentPostsByTag'
import { Tag, ArticlesListType } from '@/types'

interface ArticlesProjectsPageType extends ArticlesListType {
  tag: Tag
}
const ArticlesProjectsPage: NextPage<ArticlesProjectsPageType> = ({ tag, articles }) => (
  <Container className="grid grid-cols-12 mx-auto md:space-x-4">
    <ArticleSidebar />

    <div className="col-span-12 md:col-span-9 xl:col-span-10 p-2 md:p-0">
      <p className="font-handwriting text-3xl md:text-4xl lg:text-6xl text-blue-700 mb-2 flex flex-wrap items-baseline">
        <span>
          <Link href="/blog" passHref>
            <a className="underline hover:no-underline">Blog</a>
          </Link>
        </span>
        <span className="text-2xl mx-2">/</span>
        <span>Tags</span>
        <span className="text-2xl mx-2">/</span>
        <span>{tag.name}</span>
      </p>
      <BlogAboutCallout />

      {tag.description?.length && (
        <div className="mt-4 lg:mt-8">
          <h2 className="font-handwriting text-xl md:text-2xl text-blue-700 mb-2">About this Tag</h2>
          <p className="text-gray-600 max-w-3xl">{tag.description}</p>
        </div>
      )}
      <ArticlesList articles={articles} />
    </div>
  </Container>
)

export default ArticlesProjectsPage

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking', // false or 'blocking'
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.slug as string

  const { articles, tag } = await getRecentPostsByTag({ count: 1000, tag: slug })
  if (!tag) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      articles,
      tag,
    },
    revalidate: 60 * 60, // In seconds
  }
}
