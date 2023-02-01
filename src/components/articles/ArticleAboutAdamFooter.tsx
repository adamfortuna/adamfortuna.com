/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export const ArticleAboutAdamFooter = () => (
  <div className="max-w-6xl mx-auto my-8 h-card vcard">
    <div className="card max-w-4xl mx-auto flex flex-row gap-8">
      <img
        className="u-photo rounded-lg w-[100px] h-[100px]"
        alt="Avatar for Adam Fortuna"
        loading="lazy"
        src="https://res.cloudinary.com/dyogenez/images/w_900/w_100,h_100,c_thumb/v1675280471/wordpress/adam_6761814f5/adam_6761814f5?_i=AA"
        width={100}
        height={100}
      />
      <div>
        <p className="mb-2">
          Hi, I'm{' '}
          <Link className="p-name u-url p-author fn n" href="https://adamfortuna.com">
            <span className="given-name">Adam</span> <span className="family-name">Fortuna</span>
          </Link>
          ! I'm a full-stack product developer living in Salt Lake City, UT who loves to share what they work on.
        </p>
        <p>
          Let's keep in touch! Follow me on{' '}
          <a href="https://ruby.social/@adam" target="_blank" className="u-url link--blue" rel="noreferrer">
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
