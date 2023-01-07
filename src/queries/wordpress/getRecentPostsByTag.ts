import wordpressClient from '@/lib/wordpressClient'
import { gql } from '@apollo/client'

export const findRecentPostsByTag = gql`
  query GetWordPressRecentPostsByTag($tag: ID!, $count: Int!) {
    tag(idType: SLUG, id: $tag) {
      count
      description
      name
      slug
      posts(first: $count) {
        nodes {
          title
          slug
          date
          featuredImage {
            node {
              sourceUrl(size: THUMBNAIL)
            }
          }
          categories {
            nodes {
              slug
            }
          }
        }
      }
    }
  }
`

export const getRecentPostsByTag = ({ count, tag }: { count: number; tag: string }) => {
  return wordpressClient.query({
    query: findRecentPostsByTag,
    variables: {
      count,
      tag,
    },
  })
}
