import { getClientForProject, parsePost, sortByDateDesc } from '@/lib/wordpressClient'
import { gql } from '@apollo/client'
import flatten from 'lodash/flatten'
import { Article, WordpressPost, WordpressClientIdentifier } from '@/types'

export const findWordPressRecentPosts = gql`
  query GetWordPressRecentPosts($count: Int, $where: RootQueryToPostConnectionWhereArgs) {
    posts(first: $count, where: $where) {
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

export const getRecentPostsByProject = async (project: WordpressClientIdentifier, count: number) => {
  return getClientForProject(project)
    .query({
      query: findWordPressRecentPosts,
      variables: {
        count,
        where: {
          authorName: 'adamfortuna',
          categoryName: 'Canonical',
        },
      },
    })
    .then((result) => {
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
  projects = ['adamfortuna', 'minafi', 'hardcover'],
}: {
  count: number
  projects?: WordpressClientIdentifier[]
}) => {
  const finders = projects.map((p) => getRecentPostsByProject(p, count))
  const results = await Promise.all(finders)

  const allArticles = results.map((wordpressArticles: WordpressPost[]) =>
    wordpressArticles.map((post: WordpressPost) => parsePost(post)),
  )
  const flatArticles = flatten(allArticles)
  return flatArticles.sort(sortByDateDesc) as Article[]
}
