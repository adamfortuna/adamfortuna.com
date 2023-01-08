import { useMemo } from 'react'
import { Article } from '@/types'
import { dateFormatLong } from '@/lib/dateService'
import Tags from './Tags'

export interface ArticleHeaderProps {
  article: Article
}

export const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  const publishDate = useMemo(() => dateFormatLong(article.date), [article.date])

  return (
    <div className="my-6 px-2 prose dark:prose-invert">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl font-sans font-bold text-grey-800 leading-tight">
          {article.title}
        </h1>
      </div>
      <div className="mx-auto text-center max-w-4xl">
        {article.excerpt?.length && (
          <div className="text-grey-800 italic leading-normal mb-4 md:mb-6">Ex: {article.excerpt}</div>
        )}

        <div className="inline-flex mx-auto flex-row items-center">
          <div className="flex-1">
            <div className="text-gray-600 dark:text-gray-300 text-lg">
              <span>Written on {publishDate}. </span>
              <br className="md:hidden" />
              <span className="hidden sm:inline">{article.readingTime} min read.</span>
            </div>

            <Tags tags={article.tags} />
          </div>
        </div>
      </div>
    </div>
  )
}
