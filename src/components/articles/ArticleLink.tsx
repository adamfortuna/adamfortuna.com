import { useMemo } from 'react'

import { dateFormatLong } from '@/lib/dateService'
import { Link } from '@/components/layout/Link'
import { Article } from '@/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareUpRight } from '@fortawesome/pro-regular-svg-icons'
import ArticleProjectIcon from './ArticleProjectIcon'

export interface ArticleLinkProps {
  article: Article
}

export const ArticleLink = ({ article }: ArticleLinkProps) => {
  const publishDate = useMemo(() => dateFormatLong(article.date), [article.date])

  return (
    <div className="my-2 flex justify-between">
      <div className="flex flex-row items-center space-x-4">
        <ArticleProjectIcon project={article.project} />
        {article.external ? (
          <a href={article.url} className="text-lg link--blue font-semibold" target="_blank" rel="noreferrer">
            <span>{article.title}</span>
            <FontAwesomeIcon size="1x" icon={faSquareUpRight} className="inline ml-2 max-w-[24px]" />
          </a>
        ) : (
          <Link href={`/${article.slug}`} className="text-lg link--blue font-semibold">
            {article.title}
          </Link>
        )}
      </div>
      <p className="hidden md:block text-blue-500 text-sm w-[140px] text-right">{publishDate}</p>
    </div>
  )
}
