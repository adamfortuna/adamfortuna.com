import { adamfortunaClient, parsePage } from '@/lib/wordpressClient'

export const findWordpressPage = `
  query GetWordPressPage($slug: String!) {
    page: pageBy(uri: $slug) {
      title
      content
      date
      slug
      featuredImage {
        node {
          sourceUrl
          mediaDetails {
            width
            height
          }
        }
      }
    }
  }
`

export const getPageBySlug = (slug: string) => {
  return adamfortunaClient({
    query: findWordpressPage,
    variables: {
      slug,
    },
  }).then((result) => {
    if (!result.data.page) {
      return null
    }
    return parsePage({
      ...result.data.page,
      project: 'adamfortuna',
    })
  })
}
