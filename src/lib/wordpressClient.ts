/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { Article, Tag, WordpressPost, WordpressClientIdentifier, Category } from '@/types'
import omitBy from 'lodash/omitBy'

// GraphQL client for:
// https://wp.adamfortuna.com/graphql
const clientHttpLink = createHttpLink({
  uri: 'https://wp.adamfortuna.com/graphql',
})
const clientAuthLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Basic ${process.env.WP_ADAMFORTUNA_TOKEN}`,
    },
  }
})
const client = new ApolloClient({
  link: clientAuthLink.concat(clientHttpLink),
  cache: new InMemoryCache(),
})
export default client

// GraphQL client for:
// https://wp.hardcover.app/graphql
const hardcoverHttpLink = createHttpLink({
  uri: 'https://wp.hardcover.app/graphql',
})
const hardcoverAuthLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Basic ${process.env.WP_HARDCOVER_TOKEN}`,
    },
  }
})
export const hardcoverClient = new ApolloClient({
  link: hardcoverAuthLink.concat(hardcoverHttpLink),
  cache: new InMemoryCache(),
})

// GraphQL client for:
// https://wp.minafi.com/graphql
const minafiHttpLink = createHttpLink({
  uri: 'https://wp.minafi.com/graphql',
})
const minafiAuthLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Basic ${process.env.WP_MINAFI_TOKEN}`,
    },
  }
})
export const minafiClient = new ApolloClient({
  link: minafiAuthLink.concat(minafiHttpLink),
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

const parseTags = (tags: Tag[]) => {
  return tags.map((t) => {
    const tag = {
      name: t.name,
      slug: t.slug,
      description: t.description,
      count: t.count,
    } as Tag
    return omitBy(tag, (v) => v === null || v === undefined) as Tag
  })
}

const parseCategories = (categories: Category[]) => {
  return categories.map((c) => {
    const category = {
      name: c.name,
      slug: c.slug,
      description: c.description,
      count: c.count,
    } as Category
    return omitBy(category, (v) => v === null || v === undefined) as Category
  })
}

export const parsePost = (post: WordpressPost) => {
  const url = parseUrl(post)

  const article = {
    title: post.title,
    slug: post.slug,
    date: post.date,
    featuredImageUrl: post.featuredImage?.node.sourceUrl || null,
    categories: post.categories?.nodes ? parseCategories(post.categories.nodes) : undefined,
    content: post.content || null,
    excerpt: post.excerpt || null,
    readingTime: post.content ? Math.round(post.content.split(' ').length / 300) + 1 : null,
    tags: post.tags?.nodes ? parseTags(post.tags.nodes) : undefined,
    url,
    external: !!url,
    project: post.project,
  } as Article

  return omitBy(article, (v) => v === null || v === undefined) as Article
}
