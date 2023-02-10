/* eslint-disable @next/next/no-img-element, @typescript-eslint/no-unnecessary-condition */
import Link from 'next/link'
import { Page, Post } from '@/types'
import { dateFormatLong, dateFormatMicroformat } from '@/lib/dateService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowDown } from '@fortawesome/pro-solid-svg-icons'
import pluralize from '@/lib/pluralize'
import Tags from '@/components/articles/Tags'

export interface PhotoArticleHeaderProps {
  article: Page | Post
}

export const PhotoArticleHeader = ({ article }: PhotoArticleHeaderProps) => {
  return (
    <div className="mb-6">
      <div className="-navbar z-0 relative h-screen flex flex-col place-content-center content-wrapper">
        <div className="absolute w-full h-full inset-0 bg-grey-800">
          <img
            className="absolute inset-0 w-full h-full object-cover bg-center"
            alt={`${article.title} title`}
            src={article.featuredImage.sourceUrl}
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-smoke-200 via-smoke-400 to-smoke-500" />
        </div>
        <div className="container z-10 text-center -mt-12">
          <h1 className="font-black text-4xl md:text-6xl font-header text-white">{article.title}</h1>
          <p className="font-serif text-xl md:text-2xl italic text-grey-100">{article.excerpt}</p>
          <div className="flex items-center text-center text-white mx-auto justify-center mt-12">
            <img
              src="https://www.gravatar.com/avatar/e2830b7ec7273cf1f6c17d64102668eb?d=https://cdn.minafi.com/wp-content/uploads/2019/04/15171003/default_avatar-300x300.png&s=64"
              className="rounded-full w-16 h-16 mr-4 shadow-lg"
              alt="Adam Fortuna"
              height="32"
              width="32"
            />
            <p className="flex flex-col">
              <span className="text-xl md:text-2xl">
                <span className="italic mr-2">By</span>
                <b className="font-bold">Adam Fortuna</b>
              </span>
              <Link
                className="text-base md:text-lg u-url"
                href={`${String(process.env.NEXT_PUBLIC_URL)}/${article.slug}`}
              >
                <time
                  className="text-sm ml-2 font-semibold dt-published"
                  dateTime={dateFormatMicroformat(article.date)}
                >
                  {dateFormatLong(article.date)}
                </time>
              </Link>
            </p>
          </div>
        </div>
      </div>

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
                {article.commentCount} {pluralize('mention', article.commentCount)}
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
