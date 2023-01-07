import { NextPage } from 'next'

import { Container } from '@/components/layout/Container'
import ArticleSidebar from '@/components/articles/sidebar'
import { getRecentPostsByTags } from '@/queries/wordpress/getRecentPostsByTags'
import { ArticlesListType, WordpressPost } from '@/types'
import { ArticlesList } from '@/components/articles/ArticlesList'
import { parsePost } from '@/lib/wordpressClient'
import BlogAboutCallout from '@/components/articles/BlogAboutCallout'

const ArticlesPopularPage: NextPage<ArticlesListType> = ({ articles }) => (
  <Container className="grid grid-cols-12 mx-auto md:space-x-4">
    <ArticleSidebar />

    <div className="col-span-12 md:col-span-9 xl:col-span-10 p-2 md:p-0">
      <p className="font-handwriting text-6xl text-blue-700 mb-2">Blog - Most Popular</p>
      <BlogAboutCallout />
      <ArticlesList articles={articles} />
    </div>
  </Container>
)

export default ArticlesPopularPage

export async function getStaticProps() {
  const result = await getRecentPostsByTags({ count: 1000, tags: ['highlights', 'popular'] })
  const articles = result.data.posts.nodes.map((post: WordpressPost) => parsePost(post))

  return {
    props: {
      articles,
    },
    revalidate: 60 * 60, // In seconds
  }
}
