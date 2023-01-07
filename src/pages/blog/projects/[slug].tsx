import { GetStaticPropsContext, NextPage } from 'next'

import ArticleSidebar from '@/components/articles/sidebar'
import { ArticlesList } from '@/components/articles/ArticlesList'
import BlogAboutCallout from '@/components/articles/BlogAboutCallout'
import { Container } from '@/components/layout/Container'
import { parsePost } from '@/lib/wordpressClient'
import { getRecentPostsByCategory } from '@/queries/wordpress/getRecentPostsByCategory'
import { Category, ArticlesListType, WordpressPost } from '@/types'

interface ArticlesProjectsPageType extends ArticlesListType {
  category: Category
}
const ArticlesProjectsPage: NextPage<ArticlesProjectsPageType> = ({ category, articles }) => (
  <Container className="grid grid-cols-12 mx-auto md:space-x-4">
    <ArticleSidebar />

    <div className="col-span-12 md:col-span-9 xl:col-span-10 p-2 md:p-0">
      <p className="font-handwriting text-3xl md:text-4xl lg:text-6xl text-blue-700 mb-2 flex flex-wrap items-baseline">
        <span>Blog</span>
        <span className="text-2xl mx-2">/</span>
        <span>Projects</span>
        <span className="text-2xl mx-2">/</span>
        <span>{category.name}</span>
      </p>
      <BlogAboutCallout />

      {category.description.length > 0 && (
        <div className="mt-4 lg:mt-8">
          <h2 className="font-handwriting text-xl md:text-2xl text-blue-700 mb-2">About the Project</h2>
          <p className="text-gray-600 max-w-3xl">{category.description}</p>
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

  const result = await getRecentPostsByCategory({ count: 1000, category: slug })
  if (!result.data.tag) {
    return {
      notFound: true,
    }
  }

  const articles = result.data.category.posts.nodes.map((post: WordpressPost) => parsePost(post))

  return {
    props: {
      articles,
      category: {
        count: result.data.category.count,
        description: result.data.category.description,
        name: result.data.category.name,
        slug: result.data.category.slug,
      },
    },
    revalidate: 60 * 60, // In seconds
  }
}
