/* eslint-disable react/no-danger */
import { useMemo } from 'react'

import { dateFormatLong } from '@/lib/dateService'
import { Link } from '@/components/layout/Link'
import { Article } from '@/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareUpRight } from '@fortawesome/pro-regular-svg-icons'
import clsx from 'clsx'
import ArticleProjectIcon from './ArticleProjectIcon'

export interface ArticleLinkProps {
  article: Article
}

export const ArticleLink = ({ article }: ArticleLinkProps) => {
  const publishDate = useMemo(() => dateFormatLong(article.date), [article.date])
  const isHighlighted = useMemo(() => {
    return article.tags.length > 0 ? article.tags.map((t) => t.slug).indexOf('highlights') !== -1 : false
  }, [article.tags])

  return (
    <div className={clsx('my-2 flex justify-between p-1', isHighlighted ? 'rounded bg-yellow-100' : '')}>
      <div className="flex flex-col">
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
        {isHighlighted && (
          <p className="text-gray-600 ml-[48px]" dangerouslySetInnerHTML={{ __html: article.excerpt || '' }} />
        )}
      </div>
      <p className="hidden md:block text-blue-500 text-sm w-[140px] text-right">{publishDate}</p>
    </div>
  )
}
