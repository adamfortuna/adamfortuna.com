/* eslint-disable react/no-danger */
import { GetStaticPropsContext, NextPage } from 'next'

import { Post, PostsQuery, PostsDocument, PostQuery, PostDocument } from '@/lib/graphql/output'

import { initializeApollo } from '@/lib/apolloClient'
import { Container } from '@/components/layout/Container'
import { PostContent } from '@/components/posts/PostContent'

export interface ArticleProps {
  post: Post
}

const ArticlePage: NextPage<ArticleProps> = ({ post }) => {
  return (
    <div className="mt-[100px]">
      <Container className="">
        <h1 className="text-center font-serif font-bold text-4xl mb-4">{post.title}</h1>
        <PostContent post={post} />
      </Container>
    </div>
  )
}

export default ArticlePage

export async function getStaticPaths() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<PostsQuery>({
    query: PostsDocument,
  })

  return {
    paths: data.posts?.data.map((p) => ({
      params: {
        slug: p.attributes?.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<PostQuery>({
    query: PostDocument,
    variables: { slug: params?.slug },
  })

  return {
    props: { post: data.posts?.data[0].attributes },
    revalidate: 60 * 60,
  }
}
