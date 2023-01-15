import { adamfortunaClient, parsePage, parsePost } from '@/lib/wordpressClient'

export const findWordpressPost = `
fragment NestedComment on Comment {
  databaseId
  content
  date
  status
  author {
    node {
      url
      name
      avatar {
        url
        width
        height
      }
    }
  }
}
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
    comments(first: 1000, where: {parentIn: ""}) {
      nodes {
        ...NestedComment
        replies {
          nodes {
            ...NestedComment
          }
        }
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
