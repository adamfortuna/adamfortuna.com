import { NextPage } from 'next'

import { Container } from '@/components/layout/Container'
import ArticleSidebar from '@/components/articles/sidebar'
import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'
import { ArticlesListType } from '@/types'
import { ArticlesList } from '@/components/articles/ArticlesList'
import BlogAboutCallout from '@/components/articles/BlogAboutCallout'

const ArticlesAllPage: NextPage<ArticlesListType> = ({ articles }) => (
  <Container className="grid grid-cols-12 mx-auto md:space-x-4">
    <ArticleSidebar />

    <div className="col-span-12 md:col-span-9 xl:col-span-10 p-2 md:p-0">
      <p className="font-handwriting text-6xl text-blue-700 mb-2">Blog - Everything</p>
      <BlogAboutCallout />
      <ArticlesList articles={articles} />
    </div>
  </Container>
)

export default ArticlesAllPage

export async function getStaticProps() {
  return {
    props: {
      articles: await getRecentPosts({ count: 1000 }),
    },
    revalidate: 60 * 60, // In seconds
  }
}