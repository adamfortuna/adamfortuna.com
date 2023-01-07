import wordpressClient from '@/lib/wordpressClient'
import { gql } from '@apollo/client'

export const findRecentPostsByTags = gql`
  query GetWordPressRecentPosts($count: Int, $tags: [String]!) {
    posts(first: $count, where: { tagSlugIn: $tags }) {
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

export const getRecentPostsByTags = ({ count, tags }: { count: number; tags: string[] }) => {
  return wordpressClient.query({
    query: findRecentPostsByTags,
    variables: {
      count,
      tags,
    },
  })
}
