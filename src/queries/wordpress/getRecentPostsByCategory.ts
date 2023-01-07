import wordpressClient from '@/lib/wordpressClient'
import { gql } from '@apollo/client'

export const findRecentPostsByCategory = gql`
  query GetWordPressRecentPostsByCategory($category: ID!, $count: Int!) {
    category(idType: SLUG, id: $category) {
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

export const getRecentPostsByCategory = ({ count, category }: { count: number; category: string }) => {
  return wordpressClient.query({
    query: findRecentPostsByCategory,
    variables: {
      count,
      category,
    },
  })
}
