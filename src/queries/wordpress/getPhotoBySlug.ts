import { adamfortunaClient, parsePost } from '@/lib/wordpressClient'
import { PhotoPost } from '@/types'

export const findWordpressPhoto = `
query GetWordPressPost($uri: String!) {
  photo: photoblogBy(uri: $uri) {
    id: databaseId
    title
    content
    excerpt(format: RAW)
    date
    slug
    commentStatus
    pingStatus
    contentTypeName
    author {
      node {
        name
      }
    }
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
    series {
      series
      seriesCount
      seriesOrder
    }
  }
}
`

export const getPhotoBySlug = async (slug: string): Promise<null | PhotoPost> => {
  const result = await adamfortunaClient({
    query: findWordpressPhoto,
    variables: {
      uri: slug,
    },
  })

  if (!result.data?.photo) {
    return null
  }

  return parsePost(
    {
      ...result.data.photo,
      project: 'adamfortuna',
    },
    true,
  ) as PhotoPost
}
