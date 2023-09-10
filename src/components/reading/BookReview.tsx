'use client'

/* eslint-disable @next/next/no-img-element */
import { BookReviewReadType } from '@/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar } from '@fortawesome/pro-solid-svg-icons'
import clsx from 'clsx'
import { useMemo } from 'react'
import { dateFormatLong } from '@/lib/dateService'

const BookReview = ({ userBookRead }: { userBookRead: BookReviewReadType }) => {
  const { userBook } = userBookRead
  const { book } = userBookRead.userBook
  const { cachedImage } = book

  const url = `https://cdn.hardcover.app/enlarge?url=${cachedImage.url}&height=75&width=50`
  const ratingUrl = `https://hardcover.app/books/${book.slug}/reviews/@adam`
  const isHighlighted = userBook.rating === 5
  const publishDate = useMemo(() => dateFormatLong(userBookRead.finishedAt), [userBookRead.finishedAt])

  const contributions = book.contributions.map((contribution) => contribution.author.name)

  return (
    <div className={clsx('my-2 flex justify-between p-1', isHighlighted ? 'rounded bg-yellow-100' : '')}>
      <div className="flex flex-col">
        <div className="flex flex-row items-center space-x-4">
          <a href={ratingUrl} className="flex-none">
            <img alt={book.title} src={url} height={75} width={50} className="rounded-l-sm rounded-r-[6px] border" />
          </a>
          <div>
            <a
              href={`https://hardcover.app/books/${book.slug}`}
              className="text-lg link--blue font-semibold flex-grow"
              target="_blank"
              rel="noreferrer"
            >
              <span>{book.title}</span>
              {isHighlighted && <FontAwesomeIcon size="1x" icon={faStar} className="inline ml-2 max-w-[24px]" />}
            </a>
            <p className="text-gray-700 text-base">By {contributions.join(', ')}</p>
            <p>
              {userBookRead.userBook.rating} <FontAwesomeIcon size="sm" icon={faStar} className="text-yellow-400" />
            </p>
          </div>
        </div>
        {userBook.review && userBook.review.length > 0 && <p className="text-gray-600 ml-[65px]">{userBook.review}</p>}
      </div>

      <p className="hidden md:block text-ablue-500 text-sm text-right whitespace-nowrap space-x-2">
        {userBook.likesCount > 0 && (
          <span className={`${isHighlighted ? 'border-yellow-200' : 'bg-sky-100'} py-0.5 px-1 rounded`}>
            <FontAwesomeIcon size="sm" icon={faHeart} className="inline ml-2 max-w-[24px] mr-1" />
            <span>{userBook.likesCount}</span>
          </span>
        )}
        <span>{publishDate}</span>
      </p>
    </div>
  )
}

export default BookReview
