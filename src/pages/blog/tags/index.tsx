import { NextPage } from 'next'
import Link from 'next/link'
import ArticleSidebar from '@/components/articles/sidebar'
import BlogAboutCallout from '@/components/articles/BlogAboutCallout'
import { Container } from '@/components/layout/Container'
import { Tag } from '@/types'
import { getTags } from '@/queries/wordpress/getTags'

interface ArticlesTagsType {
  tags: Tag[]
}

const ArticlesProjectsPage: NextPage<ArticlesTagsType> = ({ tags }) => (
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
      </p>
      <BlogAboutCallout />

      <div className="pt-4" />
      <div>
        {tags.map((tag) => (
          <div key={tag.name} className="p-2">
            <p>
              <Link href={`/blog/tags/${tag.slug}`} passHref>
                <a className="link--blue">
                  {tag.name} ({tag.count})
                </a>
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  </Container>
)

export default ArticlesProjectsPage

export async function getStaticProps() {
  const tags = await getTags()

  return {
    props: {
      tags,
    },
    revalidate: 60 * 60, // In seconds
  }
}
