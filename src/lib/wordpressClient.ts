/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import {
  Author,
  Article,
  Comment,
  Page,
  Post,
  Tag,
  Webmention,
  WordpressPost,
  WordpressPage,
  WordpressClientIdentifier,
  WordPressComment,
  Category,
} from '@/types'
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

export const sortByCommentsDesc = (a1: Article, a2: Article) => {
  if (Number(a1.commentCount) === Number(a2.commentCount)) {
    return 0
  }
  return Number(a1.commentCount) < Number(a2.commentCount) ? 1 : -1
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

const parseWebmention = (wpComment: WordPressComment) => {
  if (!wpComment.webmention) {
    return null
  }
  return {
    source_url: wpComment.webmention.webmention_source_url,
    target_url: wpComment.webmention.webmention_target_url,
  } as Webmention
}

const parseCommentAuthor = (wpComment: WordPressComment) => {
  const authorNode = wpComment.author.node
  let url
  if (wpComment.type === 'mention') {
    const { webmention } = wpComment
    url = webmention.author_avatar
  } else if (wpComment.type === 'comment') {
    url = authorNode.avatar.url
  }
  const author = {
    url: authorNode.url,
    name: authorNode.name,
    avatar: { url },
  } as Author

  return omitBy(author, (v) => v === null || v === undefined) as Author
}

const parseReplies = (parentCommentDatadatabseId: number, comments: WordPressComment[]) => {
  const replies = comments.filter((c) => c.parentDatabaseId === parentCommentDatadatabseId)
  return replies
    .map((comment) => parseComment(comment, comments))
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
}

const parseComment = (wpComment: WordPressComment, comments: WordPressComment[]) => {
  const hasChildren = comments.filter((c) => c.parentDatabaseId === wpComment.databaseId).length > 0

  const webmention = parseWebmention(wpComment)
  const comment = {
    id: wpComment.databaseId,
    author: parseCommentAuthor(wpComment),
    content: wpComment.content,
    date: wpComment.date,
    type: wpComment.type,
    root: wpComment.parentDatabaseId === 0,
    replies: hasChildren ? parseReplies(wpComment.databaseId, comments) : [],
    webmention,
  } as Comment
  return omitBy(comment, (v) => v === null || v === undefined) as Comment
}

const parseComments = (comments: WordPressComment[]) => {
  return comments
    .filter((c) => c.status === 'APPROVE')
    .map((comment) => parseComment(comment, comments))
    .filter((c) => c.root)
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
}

export const parsePost = (post: WordpressPost, full: boolean = false) => {
  const url = parseUrl(post)
  const tags = post.tags?.nodes ? parseTags(post.tags.nodes) : undefined
  const isHighlighted = tags?.length && tags.length > 0 ? tags.map((t) => t.slug).indexOf('highlights') !== -1 : false
  const comments =
    post.comments && post.comments.nodes && post.comments.nodes.length > 0 ? parseComments(post.comments.nodes) : null

  const article = {
    id: post.id,
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
    commentCount: comments ? comments.length : post.commentCount || null,
    comments,
    allowComments: post.commentStatus === 'open',
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
    allowComments: page.commentStatus === 'open',
  } as Page

  return omitBy(article, (v) => v === null || v === undefined) as Page
}

export const fetchClient = ({
  url,
  auth,
  query,
  variables = {},
}: {
  url: string
  auth: string
  query: string
  variables?: any
}) => {
  const hash = Md5.hashStr(
    JSON.stringify({
      ...{
        url,
        query,
        auth,
      },
      ...variables,
    }),
  )
  return fetch(`${url}#${hash})}`, {
    method: 'POST',
    next: {
      revalidate: 60, // 1 minute
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
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
    auth: `Basic ${String(process.env.WP_ADAMFORTUNA_TOKEN)}`,
    query,
    variables,
  })
}

export const hardcoverClient = ({ query, variables = {} }: { query: string; variables?: any }) => {
  return fetchClient({
    url: 'https://wp.hardcover.app/graphql',
    auth: `Basic ${String(process.env.WP_HARDCOVER_TOKEN)}`,
    query,
    variables,
  })
}

export const minafiClient = ({ query, variables = {} }: { query: string; variables?: any }) => {
  return fetchClient({
    url: 'https://wp.minafi.com/graphql',
    auth: `Basic ${String(process.env.WP_MINAFI_TOKEN)}`,
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
