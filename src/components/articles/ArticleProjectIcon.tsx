import { Article, ArticleCategory } from '@/types'
import Af from '@/images/af.svg'
import Minafi from '@/images/minafi.svg'
import Hardcover from '@/images/hardcover.svg'

export interface ArticleLinkProps {
  article: Article
}

const ArticleProjectIcon = ({ categories }: { categories: ArticleCategory[] }) => {
  const slugs = categories.map((c) => c.slug)

  if (slugs.indexOf('hardcover') !== -1) {
    return <Hardcover className="w-6 h-6 min-w-[32px]" />
  }
  if (slugs.indexOf('minafi') !== -1) {
    return <Minafi className="w-6 h-6 text-blue-700 min-w-[32px]" />
  }
  return <Af className="w-6 h-6 text-blue-700 min-w-[32px]" />
}

export default ArticleProjectIcon
