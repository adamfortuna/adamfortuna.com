import ArticleType from '@/types/ArticleType'
import { Link } from '@/components/layout/Link'

export interface ArticleLinkProps {
  article: ArticleType
}

export const ArticleLink = ({ article }: ArticleLinkProps) => {
  return (
    <div>
     <p>
      <Link href={article.href}>{article.title}</Link>
     </p>
      <div>
        {article.tags.map((tag) => <p>{tag}</p>)}
      </div>
    </div>
  )
}
