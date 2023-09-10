'use client'

import { BookReviewReadType } from '@/types'
import BookReview from './BookReview'
import ReadingTimelineSeparator from './ReadingTimelineSeparator'

const ReadingHistory = ({ userBookReads }: { userBookReads: BookReviewReadType[] }) => {
  return (
    <div>
      {userBookReads.map((userBookRead, index) => (
        <div key={`review-${userBookRead.id}`}>
          <ReadingTimelineSeparator
            userBookReads={userBookReads}
            currentUserBookRead={userBookRead}
            previousUserBookRead={index > 0 ? userBookReads[index - 1] : null}
          />
          <BookReview userBookRead={userBookRead} />
        </div>
      ))}

      <p className="text-center my-8 rounded p-8 border-2 border-sky-200">
        <span className="font-bold">These are just the last 100 books I've read.</span>
        <br />
        See everything I've ever read on{' '}
        <a
          className="text-lg link--blue font-semibold flex-grow"
          href="https://hardcover.app/@adam/books/read?referrer_id=1"
        >
          Hardcover
        </a>
        .
      </p>
    </div>
  )
}

export default ReadingHistory
