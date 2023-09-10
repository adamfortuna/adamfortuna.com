import { hardcoverClient } from '@/lib/hardcoverService'

export const findBookReviews = `
query FindMyBooks {
  userBookReads: user_book_reads(
    where: {user_book: {user_id: {_eq: 1}, status_id: {_eq: 3}}}
    order_by: {finished_at: desc_nulls_last}
    limit: 1000
  ) {
    finishedAt:finished_at
    id
    userBook: user_book {
      rating
      review
      url
      reviewedAt: reviewed_at
      likesCount: likes_count
      book {
        slug
        title
        cachedImage: cached_image
        contributions {
          contribution
          author {
            name
          }
        }
      }
    }
  }
}
`

export const getBookReviews = async () => {
  return hardcoverClient({
    query: findBookReviews,
  }).then((result) => {
    if (!result.data) {
      return []
    }
    return result.data.userBookReads
  })
}
