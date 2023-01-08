import { ApolloClient, InMemoryCache } from '@apollo/client'
import { Article, WordpressPost, WordpressClientIdentifier } from '@/types'
import omitBy from 'lodash/omitBy'

const client = new ApolloClient({
  uri: 'https://wp.adamfortuna.com/graphql',
  cache: new InMemoryCache(),
})

export default client

export const hardcoverClient = new ApolloClient({
  uri: 'https://wp.hardcover.app/graphql',
  cache: new InMemoryCache(),
})

export const minafiClient = new ApolloClient({
  uri: 'https://wp.minafi.com/graphql',
  cache: new InMemoryCache(),
})

export const getClientForProject = (project: WordpressClientIdentifier) => {
  if (project === 'hardcover') {
    return hardcoverClient
  }
  if (project === 'minafi') {
    return minafiClient
  }
  return client
}

const parseUrl = (post: WordpressPost) => {
  if (post.project === 'minafi') {
    return `https://minafi.com/${post.slug}`
  }
  if (post.project === 'hardcover') {
    return `https://hardcover.app/blog/${post.slug}`
  }
  return null
}

export const sortByDateDesc = (a1: Article, a2: Article) => {
  const a1d = new Date(a1.date).getTime()
  const a2d = new Date(a2.date).getTime()
  if (a1d === a2d) {
    return 0
  }
  return a1d < a2d ? 1 : -1
}

export const parsePost = (post: WordpressPost) => {
  const url = parseUrl(post)

  const article = {
    title: post.title,
    slug: post.slug,
    date: post.date,
    featuredImageUrl: post.featuredImage?.node.sourceUrl || null,
    categories: post.categories?.nodes || null,
    content: post.content || null,
    excerpt: post.excerpt || null,
    readingTime: post.content ? Math.round(post.content.split(' ').length / 300) + 1 : 0,
    tags: post.tags?.nodes || null,
    url,
    external: !!url,
    project: post.project,
  } as Article

  return omitBy(article, (v) => v === null) as Article
}
