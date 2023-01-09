import WordpressClient from '@/lib/wordpressClient'
import { gql } from '@apollo/client'

export const findWordPressTags = gql`
  query GetTags {
    tags(first: 100) {
      nodes {
        name
        slug
        count
      }
    }
  }
`

export const getTags = async () => {
  const result = await WordpressClient.query({ query: findWordPressTags })
  return result.data.tags ? result.data.tags.nodes : []
}
