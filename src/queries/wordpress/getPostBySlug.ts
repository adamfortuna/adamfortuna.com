import wordpressClient from '@/lib/wordpressClient'
import { gql } from '@apollo/client'

export const findWordpressPost = gql`
  query GetWordPressPost($slug: String!) {
    post: postBy(slug: $slug) {
      title
      content
      excerpt(format: RAW)
      date
      slug
      featuredImage {
        node {
          sourceUrl(size: THUMBNAIL)
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }

      tags {
        nodes {
          name
          slug
        }
      }
    }
  }
`

export const getPostBySlug = (slug: string) => {
  return wordpressClient.query({
    query: findWordpressPost,
    variables: {
      slug,
    },
  })
}
