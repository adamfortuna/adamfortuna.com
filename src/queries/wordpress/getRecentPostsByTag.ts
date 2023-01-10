import { getClientForProject, parsePost, sortByDateDesc } from '@/lib/wordpressClient'
import { gql } from '@apollo/client'
import { Article, WordpressPost, WordpressClientIdentifier } from '@/types'
import flatten from 'lodash/flatten'

export const findTagInfo = gql`
  query GetTagInfo($tag: ID!) {
    tag(idType: SLUG, id: $tag) {
      count
      description
      name
      slug
    }
  }
`

export const findRecentPostsByTag = gql`
  query GetWordPressRecentPostsByTag($count: Int!, $where: RootQueryToPostConnectionWhereArgs) {
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

export const getRecentPostsByProjectAndTag = async (project: WordpressClientIdentifier, tag: string, count: number) => {
  return getClientForProject(project)
    .query({
      query: findRecentPostsByTag,
      variables: {
        count,
        where: {
          authorName: 'adamfortuna',
          tagSlugIn: [tag],
          categoryName: 'Canonical',
        },
      },
    })
    .then((result) => {
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
  return getClientForProject('adamfortuna')
    .query({
      query: findTagInfo,
      variables: { tag },
    })
    .then((r) => r.data.tag)
}
export const getRecentPostsByTag = async ({
  count,
  tag,
  projects = ['adamfortuna', 'minafi', 'hardcover'],
}: {
  count: number
  tag: string
  projects?: WordpressClientIdentifier[]
}) => {
  const foundTag = await getTag(tag)

  const finders = projects.map((p) => getRecentPostsByProjectAndTag(p, tag, count))
  const results = await Promise.all(finders)

  const allArticles = results.map((wordpressArticles: WordpressPost[]) =>
    wordpressArticles.map((post: WordpressPost) => parsePost(post)),
  )
  const articles = flatten(allArticles).sort(sortByDateDesc) as Article[]

  return {
    articles,
    tag: foundTag,
  }
}
