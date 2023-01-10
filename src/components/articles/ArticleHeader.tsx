import { useMemo } from 'react'
import Link from 'next/link'
import { Article } from '@/types'
import { dateFormatLong } from '@/lib/dateService'
import Tags from './Tags'

export interface ArticleHeaderProps {
  article: Article
}

export const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  const publishDate = useMemo(() => dateFormatLong(article.date), [article.date])

  return (
    <div className="mb-6 px-2">
      <div className="max-w-5xl mx-auto mb-2">
        <p className="md:text-center">
          <Link href="/blog" passHref>
            <a className="link--blue text-lg">Blog</a>
          </Link>
          <span className="text-xs ml-2">/</span>
          <span className="text-base ml-2 text-gray-500">{publishDate}</span>
        </p>
        <h1 className="md:text-center text-3xl md:text-5xl font-sans font-bold text-grey-800 leading-tight">
          {article.title}
        </h1>
      </div>
      {article.tags && article.tags.length > 0 && (
        <div className="mx-auto md:text-center max-w-4xl">
          <Tags tags={article.tags} />
        </div>
      )}
    </div>
  )
}
