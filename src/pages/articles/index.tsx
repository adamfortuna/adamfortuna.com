import { NextPage } from 'next'

import { initializeApollo } from '@/lib/apolloClient'
import { PostsQuery, PostsDocument, Post } from '@/lib/graphql/output'

import { Container } from '@/components/layout/Container'
import { PostTimeline } from '@/components/posts/PostTimeline'

export interface ArticleProps {
  posts: Post[]
}

const ArticlesPage: NextPage<ArticleProps> = ({ posts }) => {
  return (
    <main className="mt-[80px] md:mt-[100px]">
      <Container className="my-8 max-w-2xl">
        <h1 className="font-black text-3xl text-black">Articles</h1>
        <p>
          Here are a bunch of articles I've written on various blogs and platforms over the years. I prefer writing to
          speaking.
        </p>

        <ol className="ml-8 md:ml-0 mt-12 relative border-l border-gray-400">
          {posts.map((post, index) => (
            <>
              {post.date_published &&
                post.date_published.split('-')[0] !== posts[index - 1]?.date_published?.split('-')[0] && (
                  <li className="mt-24 lg:mt-0 mb-4 relative ml-12 lg:ml-0">
                    <span className="md:ml-0 lg:absolute lg:-left-[150px] w-24 h-24 text-black font-black text-2xl lg:text-right">
                      {post.date_published.split('-')[0]}
                    </span>
                  </li>
                )}
              <PostTimeline key={post.slug} post={post} />
            </>
          ))}
        </ol>
      </Container>
    </main>
  )
}

export default ArticlesPage

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
      posts: data.posts?.data.map((postData) => postData.attributes),
    },
    revalidate: 60 * 60,
  }
}
