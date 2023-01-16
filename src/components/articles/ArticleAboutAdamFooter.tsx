import Link from 'next/link'

export const ArticleAboutAdamFooter = () => (
  <div className="max-w-6xl mx-auto my-8">
    <div className="adam card max-w-4xl mx-auto">
      <p className="mb-2">
        Hi, I'm Adam! I'm a full-stack developer living in Salt Lake City, UT who loves to share what they work on.
      </p>
      <p>
        Let's keep in touch! Follow me on{' '}
        <a href="https://ruby.social/@adam" target="_blank" className="link--blue" rel="noreferrer">
          Mastodon
        </a>
        , subscribe to my{' '}
        <Link href="/newsletter" className="link--blue">
          newsletter
        </Link>{' '}
        or subscribe to my{' '}
        <a href="/api/feed" target="_blank" className="link--blue">
          RSS feed
        </a>
        .
      </p>
    </div>
  </div>
)
