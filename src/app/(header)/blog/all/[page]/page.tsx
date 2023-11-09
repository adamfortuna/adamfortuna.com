import range from 'lodash/range'
import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'
import Page from '../page'

export default Page

const PER_PAGE = Number(process.env.NEXT_PUBLIC_ARTICLES_PER_PAGE)
export async function generateStaticParams() {
  const { totalPages } = await getRecentPosts({
    count: PER_PAGE,
    offset: 0,
  })

  return range(1, totalPages + 1).map((page) => ({
    page: String(page),
  }))
}
