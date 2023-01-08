import { GetStaticPropsContext, NextPage } from 'next'
import Link from 'next/link'
import ArticleSidebar from '@/components/articles/sidebar'
import { ArticlesList } from '@/components/articles/ArticlesList'
import BlogAboutCallout from '@/components/articles/BlogAboutCallout'
import { Container } from '@/components/layout/Container'
import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'
import { ArticlesListType, WordpressClientIdentifier } from '@/types'

interface ArticlesProjectsPageType extends ArticlesListType {
  category: WordpressClientIdentifier
}

const titleize = (category: WordpressClientIdentifier) => {
  switch (category) {
    case 'adamfortuna':
      return 'Adam Fortuna'
    case 'minafi':
      return 'Minafi'
    case 'hardcover':
      return 'Hardcover'
    default:
      return 'Adam Fortuna'
  }
}
const ArticlesProjectsPage: NextPage<ArticlesProjectsPageType> = ({ category, articles }) => (
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
        <span>Projects</span>
        <span className="text-2xl mx-2">/</span>
        <span>{titleize(category)}</span>
      </p>
      <BlogAboutCallout />

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
  const slug = params?.slug as WordpressClientIdentifier
  const articles = await getRecentPosts({ count: 1000, projects: [slug] })

  return {
    props: {
      articles,
      category: slug,
    },
    revalidate: 60 * 60, // In seconds
  }
}
