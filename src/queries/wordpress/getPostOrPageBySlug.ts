import { adamfortunaClient, parsePage, parsePost } from '@/lib/wordpressClient'

export const findWordpressPost = `
query GetWordPressPost($slug: String!) {
  post: postBy(slug: $slug) {
    id: databaseId
    title
    content
    excerpt(format: RAW)
    date
    slug
    commentStatus
    pingStatus
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

    commentCount
    comments(first: 1000) {
      nodes {
        type
        databaseId
        parentDatabaseId
        date
        status
        content(format: RAW)
        webmention {
          author_avatar
          author_url
          webmention_source_url
          webmention_target_url
        }
        author {
          node {
            url
            name
            avatar {
              url
            }
          }
        }
      }
    }
  }

  page: pageBy(uri: $slug) {
    id: databaseId
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
    if (!result.data?.post && !result.data?.page) {
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
