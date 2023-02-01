import { adamfortunaClient, parsePage, parsePost } from '@/lib/wordpressClient'

export const findWordpressPost = `
query GetWordPressPost($slug: String!) {
  post: postBy(slug: $slug) {
    title
    content
    excerpt(format: RAW)
    date
    slug
    commentStatus
    featuredImage {
      node {
        sourceUrl
        mediaDetails {
          width
          height
        }
      }
    }
    tags {
      nodes {
        name
        slug
      }
    }
  }

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

export const getPostOrPageBySlug = (slug: string) => {
  return adamfortunaClient({
    query: findWordpressPost,
    variables: {
      slug,
    },
  }).then((result) => {
    if (!result.data.post && !result.data.page) {
      return null
    }
    if (result.data.post) {
      return parsePost(
        {
          ...result.data.post,
          project: 'adamfortuna',
        },
        true,
      )
    }
    if (result.data.page) {
      return parsePage({
        ...result.data.page,
        project: 'adamfortuna',
      })
    }
    return null
  })
}
