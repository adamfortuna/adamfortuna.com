import Page from '../page'

export default Page

// Uncomment to build
/*
import range from 'lodash/range'
import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'
export async function generateStaticParams() {
  const { totalPages } = await getRecentPosts({
    count: PER_PAGE,
    offset: 0,
  })

  return range(1, totalPages + 1).map((page) => ({
    page: String(page),
  }))
}
*/
