import { getClientForProject, adamfortunaClient, parsePost, sortByDateDesc } from '@/lib/wordpressClient'
import { Article, WordpressPost, WordpressClientIdentifier } from '@/types'
import flatten from 'lodash/flatten'

export const findTagInfo = `
  query GetTagInfo($tag: ID!) {
    tag(idType: SLUG, id: $tag) {
      count
      description
      name
      slug
    }
  }
`

export const findRecentPostsByTag = `
  query GetWordPressRecentPostsByTag($where: RootQueryToPostConnectionWhereArgs) {
    posts(first: 1000, where: $where) {
      nodes {
        title
        slug
        date
        excerpt(format: RAW)

        tags {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`

export const getRecentPostsByProjectAndTag = async (project: WordpressClientIdentifier, tag: string) => {
  return getClientForProject(project)({
    query: findRecentPostsByTag,
    variables: {
      where: {
        authorName: 'adamfortuna',
        tagSlugIn: [tag],
        categoryName: 'Canonical',
      },
    },
  }).then((result) => {
    if (!result.data.posts?.nodes) {
      return []
    }
    return result.data.posts.nodes.map((p: WordpressPost) => {
      return {
        ...p,
        project,
      }
    }) as WordpressPost[]
  })
}

const getTag = async (tag: string) => {
  try {
    const result = await adamfortunaClient({
      query: findTagInfo,
      variables: { tag },
    })
    return result.data.tag
  } catch {
    return null
  }
}
export const getRecentPostsByTag = async ({
  count,
  offset = 0,
  tag,
  projects = ['adamfortuna', 'minafi', 'hardcover'],
}: {
  count: number
  tag: string
  offset?: number
  projects?: WordpressClientIdentifier[]
}) => {
  const foundTag = await getTag(tag)
  if (!foundTag) {
    return {
      articles: [],
      tag: null,
    }
  }

  const finders = projects.map((p) => getRecentPostsByProjectAndTag(p, tag))
  const results = await Promise.all(finders)

  const allArticles = results.map((wordpressArticles: WordpressPost[]) =>
    wordpressArticles.map((post: WordpressPost) => parsePost(post)),
  )
  const articles = flatten(allArticles).sort(sortByDateDesc) as Article[]

  return {
    articles: [...articles.slice(offset, offset + count)],
    articlesCount: articles.length,
    tag: foundTag,
  }
}
