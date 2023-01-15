import { adamfortunaClient, parsePost } from '@/lib/wordpressClient'

export const findWordpressPost = `
fragment NestedComment on Comment {
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
  content
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
    comments {
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
}
`

export const getPostBySlug = (slug: string) => {
  return adamfortunaClient({
    query: findWordpressPost,
    variables: {
      slug,
    },
  }).then((result) => {
    if (!result.data.post) {
      return null
    }
    return parsePost(
      {
        ...result.data.post,
        project: 'adamfortuna',
      },
      true,
    )
  })
}
