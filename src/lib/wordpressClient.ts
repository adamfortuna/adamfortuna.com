/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { Article, Page, Post, Tag, WordpressPost, WordpressPage, WordpressClientIdentifier, Category } from '@/types'
import omitBy from 'lodash/omitBy'
import { Md5 } from 'ts-md5'

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

export const parseTags = (tags: Tag[]) => {
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

export const parsePost = (post: WordpressPost, full: boolean = false) => {
  const url = parseUrl(post)
  const tags = post.tags?.nodes ? parseTags(post.tags.nodes) : undefined
  const isHighlighted = tags?.length && tags.length > 0 ? tags.map((t) => t.slug).indexOf('highlights') !== -1 : false

  const article = {
    title: post.title,
    slug: post.slug,
    date: post.date,
    featuredImage: post.featuredImage?.node ? post.featuredImage?.node : null,
    categories: post.categories?.nodes ? parseCategories(post.categories.nodes) : undefined,
    content: post.content || null,
    excerpt: post.excerpt?.length > 0 && (full || isHighlighted) ? post.excerpt : null,
    readingTime: post.content ? Math.round(post.content.split(' ').length / 300) + 1 : null,
    tags,
    url,
    external: !!url,
    project: post.project,
    allowComments: post.commentStatus ? post.commentStatus === 'open' : null,
  } as Post

  return omitBy(article, (v) => v === null || v === undefined) as Post
}

export const parsePage = (page: WordpressPage) => {
  const article = {
    title: page.title,
    slug: page.slug,
    date: page.date,
    featuredImage: page.featuredImage?.node ? page.featuredImage?.node : null,
    content: page.content || null,
    project: page.project,
  } as Page

  return omitBy(article, (v) => v === null || v === undefined) as Page
}

export const fetchClient = ({
  url,
  key,
  query,
  variables = {},
}: {
  url: string
  key: string
  query: string
  variables?: any
}) => {
  const hash = Md5.hashStr(
    JSON.stringify({
      ...{
        url,
        query,
        key,
      },
      ...variables,
    }),
  )
  return fetch(`${url}#${hash})}`, {
    method: 'POST',
    cache: 'force-cache',
    next: {
      revalidate: 60 * 60, // 1 hour
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${key}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then((res) => res.json())
}

export const adamfortunaClient = ({ query, variables = {} }: { query: string; variables?: any }) => {
  return fetchClient({
    url: 'https://wp.adamfortuna.com/graphql',
    key: String(process.env.WP_ADAMFORTUNA_TOKEN),
    query,
    variables,
  })
}

export const hardcoverClient = ({ query, variables = {} }: { query: string; variables?: any }) => {
  return fetchClient({
    url: 'https://wp.hardcover.app/graphql',
    key: String(process.env.WP_HARDCOVER_TOKEN),
    query,
    variables,
  })
}

export const minafiClient = ({ query, variables = {} }: { query: string; variables?: any }) => {
  return fetchClient({
    url: 'https://wp.minafi.com/graphql',
    key: String(process.env.WP_MINAFI_TOKEN),
    query,
    variables,
  })
}

export const getClientForProject = (project: WordpressClientIdentifier) => {
  if (project === 'hardcover') {
    return hardcoverClient
  }
  if (project === 'minafi') {
    return minafiClient
  }
  return adamfortunaClient
}
