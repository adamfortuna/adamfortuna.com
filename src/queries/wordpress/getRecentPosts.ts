import wordpressClient from '@/lib/wordpressClient'
import { gql } from '@apollo/client'

export const findWordPressRecentPosts = gql`
  query GetWordPressRecentPosts($count: Int) {
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
`

export const getRecentPosts = ({ count }: { count: number }) => {
  return wordpressClient.query({
    query: findWordPressRecentPosts,
    variables: {
      count,
    },
  })
}
