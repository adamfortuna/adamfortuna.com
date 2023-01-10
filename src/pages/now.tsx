import { getPageBySlug } from '@/queries/wordpress/getPageSlug'
import WordpressPage from '@/components/articles/WordpressPage'

export default WordpressPage

export async function getStaticProps() {
  const article = await getPageBySlug('now')
  return {
    props: { article },
    revalidate: 60 * 60,
  }
}
