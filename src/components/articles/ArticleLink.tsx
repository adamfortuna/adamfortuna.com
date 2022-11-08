import { Link } from '@/components/layout/Link'
import { Article } from '@/types'

export interface ArticleLinkProps {
  article: Article
}

export const ArticleLink = ({ article }: ArticleLinkProps) => {
  return (
    <div>
      <p>
        <Link href={article.href}>{article.title}</Link>
      </p>
      <div>
        {article.tags.map((tag) => (
          <p>{tag}</p>
        ))}
      </div>
    </div>
  )
}
