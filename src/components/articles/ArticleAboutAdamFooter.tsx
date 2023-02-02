/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export const ArticleAboutAdamFooter = () => (
  <div className="max-w-6xl mx-auto my-8">
    <div className="card max-w-4xl mx-auto flex flex-row gap-8 h-card vcard p-author author">
      <img
        className="rounded-lg w-[100px] h-[100px]"
        alt="Avatar for Adam Fortuna"
        loading="lazy"
        src="https://res.cloudinary.com/dyogenez/images/w_900/w_100,h_100,c_thumb/v1675280471/wordpress/adam_6761814f5/adam_6761814f5?_i=AA"
        width={100}
        height={100}
      />
      <img
        className="u-photo hidden"
        alt="Avatar for Adam Fortuna"
        loading="lazy"
        src="https://res.cloudinary.com/dyogenez/images/w_900/w_100,h_100,c_thumb/v1675280471/wordpress/adam_6761814f5/adam_6761814f5?_i=AA"
      />
      <div>
        <p className="mb-2">
          Welcome! I'm{' '}
          <Link className="p-name fn" href={String(process.env.NEXT_PUBLIC_URL)} rel="author">
            Adam Fortuna
          </Link>
          .{' '}
          <span className="p-note">
            I'm a full-stack product developer in Salt Lake City, UT. I love enlivening experiences, visualizing data,
            and making playful websites.
          </span>
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
  </div>
)
