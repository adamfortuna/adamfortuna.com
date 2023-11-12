import Page from '../page'

export const revalidate = 3600

export default Page

/*
import flatten from 'lodash/flatten'
import range from 'lodash/range'
import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'
import { WordpressClientIdentifier } from '@/types'
const PER_PAGE = Number(process.env.NEXT_PUBLIC_ARTICLES_PER_PAGE)

export async function generateStaticParams() {
  const projects: WordpressClientIdentifier[] = ['adamfortuna', 'hardcover', 'minafi']

  const pairs = projects.map(async (project) => {
    const { totalPages } = await getRecentPosts({
      count: PER_PAGE,
      offset: 0,
      projects: [project],
    })

    return range(1, totalPages + 1).map((page) => ({
      slug: project,
      page: String(page),
    }))
  })

  const result = await Promise.all(pairs)
  return flatten(result)
}

*/
