import { useMemo } from 'react'

import { dateFormatLong } from '@/lib/dateService'
import { Link } from '@/components/layout/Link'
import { Article } from '@/types'

export interface ArticleLinkProps {
  article: Article
}

export const ArticleLink = ({ article }: ArticleLinkProps) => {
  const publishDate = useMemo(() => dateFormatLong(article.date), [article.date])
  const tags = useMemo(() => (article.tags.length > 0 ? article.tags.sort().join(', ') : ''), [article.tags])

  return (
    <div className="my-2">
      <Link href={article.href} className="text-lg">
        {article.title}
      </Link>
      <div>
        <ul className="list-bullet">
          <li>
            <span className="text-xs font-semibold bg-blue-200 px-1 py-0.5 rounded">{article.project}</span>
          </li>
          <li className="dark:text-white">{publishDate}</li>
          {tags.length > 0 && <li className="dark:text-white">{tags}</li>}
        </ul>
      </div>
    </div>
  )
}
