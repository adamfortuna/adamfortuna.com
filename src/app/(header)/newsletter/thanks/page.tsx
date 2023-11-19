import { Container } from '@/components/layout/Container'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons'

export const dynamic = 'force-static'

export default async function NewsletterPage() {
  return (
    <Container className="max-w-5xl">
      <h1 className="md:text-center text-3xl md:text-5xl font-hardwriting font-bold text-grey-800 leading-tight">
        Thank You!
      </h1>
      <p className="text-center">
        I'll send you an email once a month with everything that's new (or whenever I remember).
      </p>
      <p className="text-center mt-4">
        For even more updates, follow me on{' '}
        <a href="https://ruby.social/@adam" className="link--blue" target="_blank" rel="noreferrer">
          Mastodon
        </a>
        , or subscribe to me{' '}
        <a href="/feed" target="_blank" className="link--blue">
          RSS feed
        </a>
        .
      </p>
      <p className="text-center mt-4 italic">(But really, once a month is enough. 😂)</p>

      <p className="text-center mt-8">
        <Link href="/blog" className="link--blue">
          <span className="pr-1">Back to blog</span>
          <FontAwesomeIcon icon={faArrowRight} size="sm" className="w-4 h-4 inline" />
        </Link>
      </p>
    </Container>
  )
}
