import Page from '../page'

export const dynamic = 'force-static'
export const revalidate = 3600

export default Page

/*
import flatten from 'lodash/flatten'
import range from 'lodash/range'
import { getTags } from '@/queries/wordpress/getTags'
export async function generateStaticParams() {
  const tags = (await getTags()).filter((t) => t.count && t.count > 0)

  const pairs = tags.map((tag) => {
    const PER_PAGE = Number(process.env.NEXT_PUBLIC_ARTICLES_PER_PAGE)
    const pagesCount = Math.ceil((tag.count || 0) / PER_PAGE)

    return range(1, pagesCount + 1).map((page) => ({
      slug: tag.slug,
      page: String(page),
    }))
  })

  return flatten(pairs)
}
*/
