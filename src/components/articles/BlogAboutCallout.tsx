import { faRss } from '@fortawesome/pro-duotone-svg-icons'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BlogAboutCallout = () => (
  <div className="bg-yellow-200 rounded p-4 md:p-4 leading-5 flex flex-row md:space-x-4 items-center">
    <FontAwesomeIcon icon={faRss} className="hidden md:block text-blue-700 w-[48px]" size="3x" />
    <div className="text-blue-500">
      <p className="mb-4">
        I write about product development, interactive design, work in public, and mindsets to be a creative, happy
        person.
      </p>
      <p>
        To stay in touch, follow me on{' '}
        <a href="https://ruby.social/@adam" className="link--blue" target="_blank" rel="noreferrer">
          Mastodon
        </a>
        , subscribe to my{' '}
        <Link href="/newsletter" passHref>
          <a className="link--blue">newsletter</a>
        </Link>{' '}
        or{' '}
        <a href="/feed.xml" target="_blank" className="link--blue">
          RSS feed
        </a>
        .
      </p>
    </div>
  </div>
)

export default BlogAboutCallout
