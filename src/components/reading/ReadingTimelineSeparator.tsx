import { BookReviewReadType } from '@/types'
import { useMemo } from 'react'

interface ReadingTimelineSeparatorProps {
  userBookReads: BookReviewReadType[]
  currentUserBookRead: BookReviewReadType
  previousUserBookRead: BookReviewReadType | null
}

interface ReadingCountProps {
  userBookReads: BookReviewReadType[]
  year: number
}
export const ReadingCount = ({ userBookReads, year }: ReadingCountProps) => {
  const count = useMemo(() => {
    return userBookReads.filter((r) => new Date(r.finishedAt).getFullYear() === year).length
  }, [userBookReads, year])

  return (
    <span className="text-sm font-semibold text-gray-400 dark:text-gray-200 block">
      {count} rating{count === 1 ? '' : 's'}
    </span>
  )
}

const ReadingTimelineSeparator = ({
  userBookReads,
  currentUserBookRead,
  previousUserBookRead,
}: ReadingTimelineSeparatorProps) => {
  const currentReviewDate = new Date(currentUserBookRead.finishedAt)
  const currentReviewYear = currentReviewDate.getFullYear()

  const previousReviewDate = previousUserBookRead ? new Date(previousUserBookRead.finishedAt) : null
  const previousReviewYear = previousReviewDate ? previousReviewDate.getFullYear() : null

  if (!Number.isNaN(currentReviewYear) && currentReviewYear !== previousReviewYear) {
    return (
      <div className="mt-8 md:mt-12 flex justify-between items-baseline border-yellow-300 border-b-4">
        <span className="text-blue-700 dark:text-gray-100 font-bold text-4xl font-handwriting">
          {currentReviewYear}
        </span>
        <ReadingCount userBookReads={userBookReads} year={currentReviewYear} />
      </div>
    )
  }

  return <></>
}

export default ReadingTimelineSeparator
