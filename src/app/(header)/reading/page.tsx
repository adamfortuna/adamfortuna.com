import { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import ReadingHistory from '@/components/reading/ReadingHistory'
import { getBookReviews } from '@/queries/hardcover/getBookReviews'

export const revalidate = 3600 // 60 minutes

export const metadata: Metadata = {
  title: "Adam's Recent Reads",
  description: "The last 100 books I've read from Hardcover.",
}

export default async function ReadingPage() {
  const userBookReads = await getBookReviews()

  return (
    <Container className="max-w-3xl">
      <div className="prose dark:prose-invert">
        <h1 className="font-handwriting text-6xl text-blue-700 mb-2" style={{ marginTop: '0' }}>
          Reading
        </h1>
        <p>
          I wasn't a much of a reader when I was a kid. It wasn't until after college when I found audiobooks did I{' '}
          <i>really</i> start listening to and (eventually) reading more books.
        </p>
        <p>
          In 2021, I started{' '}
          <a href="https://hardcover.app" target="_blank" rel="noreferrer">
            Hardcover.app
          </a>
          , a social network for readers and a replacement for Goodreads. It all began here on this page! I loved
          sharing my books on my blog and Goodreads announced they would shut off that API. Not wanting to give up on
          the open web, I started Hardcover with a goal of being a forever-open version with easy access to your own
          data.
        </p>
      </div>

      <ReadingHistory userBookReads={userBookReads} />
    </Container>
  )
}
