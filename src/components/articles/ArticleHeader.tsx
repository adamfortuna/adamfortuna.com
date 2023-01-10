import { useMemo } from 'react'
import Link from 'next/link'
import { Article } from '@/types'
import { dateFormatLong } from '@/lib/dateService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/pro-solid-svg-icons'
import Tags from './Tags'

export interface ArticleHeaderProps {
  article: Article
}

export const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  const publishDate = useMemo(() => dateFormatLong(article.date), [article.date])

  return (
    <div className="mb-6 px-2">
      <div className="max-w-5xl mx-auto mb-2">
        <p className="sm:justify-center flex flex-row items-center">
          <Link href="/blog" passHref>
            <a className="link--blue text-sm flex items-center">
              <FontAwesomeIcon icon={faArrowLeft} size="sm" className="w-4 h-4 inline" />
              <span className="pl-1">Blog</span>
            </a>
          </Link>
          <span className="text-sm ml-2 text-gray-500 font-semibold">{publishDate}</span>
        </p>
        <h1 className="sm:text-center text-3xl md:text-5xl font-sans font-bold text-grey-800 leading-tight">
          {article.title}
        </h1>
      </div>
      {article.tags && article.tags.length > 0 && (
        <div className="mx-auto sm:text-center max-w-4xl">
          <Tags tags={article.tags} />
        </div>
      )}
    </div>
  )
}
