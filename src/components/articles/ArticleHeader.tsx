/* eslint-disable @next/next/no-img-element, @typescript-eslint/no-unnecessary-condition */
import Link from 'next/link'
import { Page, Post } from '@/types'
import { dateFormatLong, dateFormatMicroformat } from '@/lib/dateService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowDown } from '@fortawesome/pro-solid-svg-icons'
import pluralize from '@/lib/pluralize'
import Tags from './Tags'

export interface ArticleHeaderProps {
  article: Page | Post
}

export const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  return (
    <div className="mb-6 px-2">
      <div className="max-w-5xl mx-auto mb-2">
        <p className="sm:justify-center flex flex-row items-center">
          <Link href="/blog" className="link--blue text-sm flex items-center">
            <FontAwesomeIcon icon={faArrowLeft} size="sm" className="w-4 h-4 inline" />
            <span className="pl-1">Blog</span>
          </Link>
          <Link href={`${String(process.env.NEXT_PUBLIC_URL)}/${article.slug}`} className="u-url">
            <time
              className="text-sm ml-2 text-gray-500 font-semibold dt-published"
              dateTime={dateFormatMicroformat(article.date)}
            >
              {dateFormatLong(article.date)}
            </time>
          </Link>
          {article.commentCount > 0 && (
            <a href="#comments" className="text-sm link--blue ml-2 font-semibold flex items-center">
              <span>
                {article.commentCount} {pluralize('comment', article.commentCount)}
              </span>
              <FontAwesomeIcon icon={faArrowDown} size="xs" className="w-3 h-3 inline pl-1" />
            </a>
          )}
        </p>
        <h1 className="sm:text-center text-3xl md:text-5xl font-sans font-bold text-grey-800 leading-tight p-name">
          {article.title}
        </h1>
        {article.excerpt && article.excerpt.length > 0 && <div className="hidden p-summary">{article.excerpt}</div>}

        {article.featuredImage && article.featuredImage.sourceUrl.length > 0 && (
          <img
            className="u-photo hidden"
            alt={`${article.title} poster`}
            loading="lazy"
            src={article.featuredImage.sourceUrl}
          />
        )}
      </div>
      {article.tags && article.tags.length > 0 && (
        <div className="mx-auto sm:text-center max-w-4xl">
          <Tags tags={article.tags} />
        </div>
      )}
    </div>
  )
}
