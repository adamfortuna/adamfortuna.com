import wordpressClient, { parsePage } from '@/lib/wordpressClient'
import { gql } from '@apollo/client'

export const findWordpressPage = gql`
  query GetWordPressPage($slug: String!) {
    page: pageBy(uri: $slug) {
      title
      content
      date
      slug
      featuredImage {
        node {
          sourceUrl(size: THUMBNAIL)
        }
      }
    }
  }
`

export const getPageBySlug = (slug: string) => {
  return wordpressClient
    .query({
      query: findWordpressPage,
      variables: {
        slug,
      },
    })
    .then((result) => {
      if (!result.data.page) {
        return null
      }
      return parsePage({
        ...result.data.page,
        project: 'adamfortuna',
      })
    })
}
