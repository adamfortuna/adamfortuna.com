import { ApolloClient, InMemoryCache } from '@apollo/client'
import { WordpressPost } from '@/types'

const client = new ApolloClient({
  uri: 'https://wp.adamfortuna.com/graphql',
  cache: new InMemoryCache(),
})

export default client

export const parsePost = (post: WordpressPost) => {
  return {
    title: post.title,
    slug: post.slug,
    date: post.date,
    featuredImageUrl: post.featuredImage?.node.sourceUrl || null,
    categories: post.categories ? post.categories.nodes : [],
    content: post.content || null,
    excerpt: post.excerpt || null,
    readingTime: post.content ? Math.round(post.content.split(' ').length / 300) + 1 : 0,
    tags: post.tags?.nodes || [],
  }
}
