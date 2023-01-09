import { NextPage } from 'next'
import Link from 'next/link'
import ArticleSidebar from '@/components/articles/sidebar'
import Projects from '@/components/articles/sidebar/Projects'
import BlogAboutCallout from '@/components/articles/BlogAboutCallout'
import { Container } from '@/components/layout/Container'
import { ArticlesListType, WordpressClientIdentifier } from '@/types'

interface ArticlesProjectsPageType extends ArticlesListType {
  category: WordpressClientIdentifier
}

const ArticlesProjectsPage: NextPage<ArticlesProjectsPageType> = () => (
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
      </p>
      <BlogAboutCallout />

      <div className="pt-12" />
      <Projects />
    </div>
  </Container>
)

export default ArticlesProjectsPage
