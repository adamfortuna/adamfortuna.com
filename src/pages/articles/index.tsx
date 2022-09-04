import { NextPage } from 'next'

import { initializeApollo } from '@/lib/apolloClient'
import { PostsQuery, PostsDocument, Post } from '@/lib/graphql/output'

import { Container } from '@/components/layout/Container'
import { Link } from '@/components/layout/Link'

export interface ArticleProps {
  articles: Post[]
}

const Articles: NextPage<ArticleProps> = ({ articles }) => {
  return (
    <main className="mt-[100px]">
      <Container className="my-8">
        <h1 className="font-black text-3xl">Articles</h1>
        <p>Here are some articles I've written.</p>

        <ol>
          {articles.map((article) => (
            <li>
              <Link href={`/articles/${article.slug}`}>{article.title}</Link>
            </li>
          ))}
        </ol>
      </Container>
    </main>
  )
}

export default Articles

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<PostsQuery>({
    query: PostsDocument,
    variables: {
      sort: ['date_published:desc'],
    },
  })

  return {
    props: {
      articles: data.posts?.data.map((postData) => postData.attributes),
    },
    revalidate: 60 * 60,
  }
}
