/* eslint-disable @next/next/no-img-element, @typescript-eslint/no-unnecessary-condition */
import Link from 'next/link'
import { PhotoPost } from '@/types'
import { dateFormatLong, dateFormatMicroformat } from '@/lib/dateService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/pro-solid-svg-icons'
import pluralize from '@/lib/pluralize'
import Tags from '@/components/articles/Tags'
import Af from '@/images/af.svg'
import SeriesNavigation from './SeriesNavigation'

export interface PhotoArticleHeaderProps {
  article: PhotoPost
}

export const PhotoArticleHeader = ({ article }: PhotoArticleHeaderProps) => {
  return (
    <div className="mb-6">
      <div className="relative h-screen flex flex-col place-content-center content-wrapper">
        <Link
          href={String(process.env.NEXT_PUBLIC_URL)}
          className="z-10 group py-1 sm:py-2 px-2 sm:px-3 hover:bg-sky-600 dark:hover:bg-sky-400 dark:hover:text-sky-900 hover:text-white flex items-center font-semibold h-card u-url absolute top-2 left-2 group-hover:text-white bg-black/40 rounded p-4"
          rel="me"
        >
          <span className="sr-only p-name">Adam Fortuna</span>
          <Af className="w-10 h-8 text-white dark:text-yellow-400" />
          <span className="hidden sm:inline-block absolute -right-8 text-2xl opacity-0 group-hover:opacity-100 duration-400 transition-opacity group-hover:animate-waving-hand">
            👋
          </span>
          <span className="hidden">
            <img
              className="u-photo"
              alt="Avatar for Adam Fortuna"
              loading="lazy"
              src="https://storage.cloud.google.com/adamfortuna/blog/adam_6761814f5.jpeg"
            />
            <span className="p-note">
              Hey hey! I'm a full-stack product developer in Salt Lake City, UT. I love enlivening experiences,
              visualizing data, and making playful websites.
            </span>
          </span>
        </Link>
        <SeriesNavigation article={article} />
        <div className="absolute w-full h-full inset-0 bg-grey-800">
          {article.featuredImage?.sourceUrl ? (
            <img
              className="absolute inset-0 w-full h-full object-cover bg-center"
              alt={`${article.title} title`}
              src={article.featuredImage.sourceUrl}
            />
          ) : (
            false
          )}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/50 via-black/60 to-black/60" />
        </div>
        <div className="flex flex-center z-10 flex-col">
          <div className="self-center -mt-24">
            <h1 className="font-semibold text-6xl md:text-8xl text-gray-100">{article.title}</h1>
            <p className="mt-4 text-white font-serif italic text-2xl md:text-3xl text-grey-100">{article.excerpt}</p>
          </div>
          <div className="absolute inset-x-0 bottom-[3%] self-end flex flex-col items-center text-center text-white mx-auto justify-center">
            <p className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif">By Adam Fortuna</span>
              <Link
                className="text-base md:text-lg font-serif u-url"
                href={`${String(process.env.NEXT_PUBLIC_URL)}/${article.slug}`}
              >
                <time
                  className="text-lg ml-2 font-semibold dt-published"
                  dateTime={dateFormatMicroformat(article.date)}
                >
                  {dateFormatLong(article.date)}
                </time>
              </Link>
            </p>

            {article.tags && article.tags.length > 0 && (
              <div className="mt-4 mx-auto sm:text-center max-w-4xl">
                <Tags tags={article.tags} className="link--white" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-2">
        <p className="sm:justify-center flex flex-row items-center">
          {article.commentCount > 0 && (
            <a href="#comments" className="text-sm link--blue ml-2 font-semibold flex items-center">
              <span>
                {article.commentCount} {pluralize('mention', article.commentCount)}
              </span>
              <FontAwesomeIcon icon={faArrowDown} size="xs" className="w-3 h-3 inline pl-1" />
            </a>
          )}
        </p>

        {article.featuredImage && article.featuredImage.sourceUrl.length > 0 && (
          <img
            className="u-photo hidden"
            alt={`${article.title} poster`}
            loading="lazy"
            src={article.featuredImage.sourceUrl}
          />
        )}
      </div>
    </div>
  )
}
