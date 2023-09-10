import ReadingHistory from '@/components/reading/ReadingHistory'
import { getBookReviews } from '@/queries/hardcover/getBookReviews'

export const revalidate = 3600 // 60 minutes

export default async function ReadingPage() {
  const userBookReads = await getBookReviews()

  return <ReadingHistory userBookReads={userBookReads} />
}
