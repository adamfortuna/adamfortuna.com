import Page from '../page'

export default Page

// Uncomment to build
/*
import range from 'lodash/range'
import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'
import { Article } from '@/types'
export async function generateStaticParams() {
  const { totalPages } = await getRecentPosts({
    count: PER_PAGE,
    filterBy: (article: Article) => article.commentCount > 0,
  })

  return range(1, totalPages + 1).map((page) => ({
    page: String(page),
  }))
}
*/
