/* eslint-disable @next/next/no-img-element, @typescript-eslint/no-unnecessary-condition */
import { PhotoPost } from '@/types'
import { dateFormatLong, dateFormatMicroformat } from '@/lib/dateService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/pro-solid-svg-icons'
import pluralize from '@/lib/pluralize'
import Tags from '@/components/articles/Tags'

export interface PhotoArticleHeaderProps {
  article: PhotoPost
}

export const PhotoArticleTitle = ({ article }: PhotoArticleHeaderProps) => {
  return (
    <div className="max-w-3xl mx-auto mt-4" id="content">
      <div>
        {article.series?.series ? (
          <p className="font-medium text-sm">
            {article.series.series} Collection
            <span className="text-sm text-gray-700 ml-1">
              (Part {article.series.seriesOrder} of {article.series.seriesCount})
            </span>
          </p>
        ) : (
          false
        )}
        <h1 className="font-bold text-xl md:text-5xl font-serif">{article.title}</h1>
        <p className="mt-2 font-sans text-lg md:text-xl text-grey-100 font-medium">{article.excerpt}</p>
      </div>
      <p className="mt-8 flex flex-col">
        <span className="text-base text-black font-semibold">By {article.author}</span>
        <time className="text-sm font-medium dt-published" dateTime={dateFormatMicroformat(article.date)}>
          {dateFormatLong(article.date)}
        </time>
      </p>

      {article.tags && article.tags.length > 0 && (
        <div className="mx-auto sm:text-center max-w-4xl">
          <Tags tags={article.tags} className="link--blue" />
        </div>
      )}
      {article.commentCount > 0 && (
        <div className="max-w-5xl mx-auto mb-2">
          <p className="sm:justify-center flex flex-row items-center">
            <a href="#comments" className="text-sm link--blue ml-2 font-semibold flex items-center">
              <span>
                {article.commentCount} {pluralize('mention', article.commentCount)}
              </span>
              <FontAwesomeIcon icon={faArrowDown} size="xs" className="w-3 h-3 inline pl-1" />
            </a>
          </p>
        </div>
      )}
    </div>
  )
}
