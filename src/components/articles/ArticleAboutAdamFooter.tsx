/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Follow } from './Follow'

export const ArticleAboutAdamFooter = () => (
  <div className="max-w-3xl mx-auto my-8">
    <div className="card max-w-4xl mx-auto flex flex-row gap-8 h-card vcard p-author author">
      <img
        className="rounded-lg w-[100px] h-[100px]"
        alt="Avatar for Adam Fortuna"
        loading="lazy"
        src="https://storage.googleapis.com/adamfortuna/blog/adam_6761814f5_small.jpeg"
        width={100}
        height={100}
      />
      <img
        className="u-photo hidden"
        alt="Avatar for Adam Fortuna"
        loading="lazy"
        src="https://storage.googleapis.com/adamfortuna/blog/adam_6761814f5.jpeg"
      />
      <div>
        <div className="mb-2">
          <p className="font-semibold">Hey hey! 👋</p>
          <p>
            I'm{' '}
            <Link className="p-name fn u-url" href={String(process.env.NEXT_PUBLIC_URL)} rel="author">
              Adam
            </Link>
            ,{' '}
            <span className="p-note">
              a full-stack product developer in Salt Lake City, UT. I love enlivening experiences, visualizing data, and
              making playful websites.
            </span>
          </p>
        </div>
      </div>
    </div>

    <Follow />
  </div>
)
