import { GetStaticPropsContext } from 'next'
import { Article } from '@/types'
import { parsePost } from '@/lib/wordpressClient'
import { getPostBySlug } from '@/queries/wordpress/getPostBySlug'
import { ArticleContentHtml } from '@/components/articles/ArticleContent'
import { ArticleHeader } from '@/components/articles/ArticleHeader'

interface Props {
  article: Article
}

const BlogPage = ({ article }: Props) => {
  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row-reverse mx-auto w-full justify-center">
        <div className="lg:mx-auto flex-1 lg:flex-none justify-center">
          <ArticleHeader article={article} />
          <ArticleContentHtml article={article} />
        </div>
      </div>
    </div>
  )
}

export default BlogPage

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking', // false or 'blocking'
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.slug as string
  if (!slug) {
    return {
      notFound: true,
    }
  }

  const article = await getPostBySlug(slug)

  if (!article.data?.post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      article: article.data.post ? parsePost(article.data.post) : null,
    },
    revalidate: 60 * 10, // In seconds
  }
}
