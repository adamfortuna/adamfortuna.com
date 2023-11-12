/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export const Follow = () => (
  <div className="card max-w-4xl mx-auto flex flex-row gap-8 leading-6">
    <p>
      Let's keep in touch! Send me an email at{' '}
      <a href="mailto:heyhey@adamfortuna.com" target="_blank" className="link--blue" rel="noreferrer">
        heyhey@adamfortuna.com
      </a>
      , follow me on{' '}
      <a href="https://ruby.social/@adam" target="_blank" className="link--blue" rel="noreferrer">
        Mastodon (@adam@ruby.social)
      </a>
      , subscribe to my{' '}
      <Link href="/newsletter" className="link--blue">
        newsletter
      </Link>{' '}
      or{' '}
      <a href="/api/feed" target="_blank" className="link--blue">
        RSS feed
      </a>
      .
    </p>
  </div>
)
