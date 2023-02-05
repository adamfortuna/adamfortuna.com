import { getClientForProject, parsePost, sortByDateDesc } from '@/lib/wordpressClient'
import flatten from 'lodash/flatten'
import { WordpressPost, WordpressClientIdentifier, Article } from '@/types'

export const findWordPressRecentPosts = `
  query GetWordPressRecentPosts($where: RootQueryToPostConnectionWhereArgs) {
    posts(first: 1000, where: $where) {
      nodes {
        title
        slug
        date
        excerpt(format: RAW)
        commentCount

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

export const getRecentPostsByProject = async (project: WordpressClientIdentifier) => {
  return getClientForProject(project)({
    query: findWordPressRecentPosts,
    variables: {
      where: {
        authorName: 'adamfortuna',
        categoryName: 'Canonical',
      },
    },
  }).then((result) => {
    return result.data.posts.nodes.map((p: WordpressPost) => {
      return {
        ...p,
        project,
      }
    }) as WordpressPost[]
  })
}

export const getRecentPosts = async ({
  count,
  offset = 0,
  projects = ['adamfortuna', 'minafi', 'hardcover'],
  sortBy = sortByDateDesc,
  filterBy = (a: Article) => a,
}: {
  count: number
  offset?: number
  projects?: WordpressClientIdentifier[]
  filterBy?: any
  sortBy?: any
}) => {
  const finders = projects.map((p) => getRecentPostsByProject(p))
  const results = await Promise.all(finders)

  const allArticles = results.map((wordpressArticles: WordpressPost[]) =>
    wordpressArticles.map((post: WordpressPost) => parsePost(post)),
  )
  const flatArticles = flatten(allArticles).filter(filterBy).sort(sortBy)
  const articles = [...flatArticles.slice(offset, offset + count)]

  return {
    articlesCount: flatArticles.length,
    articles,
    totalPages: Math.ceil(flatArticles.length / count),
  }
}
