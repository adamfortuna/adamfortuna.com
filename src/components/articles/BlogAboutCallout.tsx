import { faRss } from '@fortawesome/pro-duotone-svg-icons'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Af from '@/images/af.svg'
import Minafi from '@/images/minafi.svg'
import Hardcover from '@/images/hardcover.svg'

const BlogAboutCallout = () => (
  <div className="bg-yellow-200 rounded p-4 md:p-4 leading-5 flex flex-row md:space-x-4 items-center">
    <FontAwesomeIcon icon={faRss} className="hidden md:block text-blue-700 w-[48px]" size="3x" />
    <div className="text-blue-500">
      <p className="mb-4">
        Under
        <span className="bg-yellow-400 rounded px-1 py-0.5 mx-1 text-blue-800">
          <Af className="w-4 h-4 text-blue-700 inline mb-0.5" /> <span>this blog</span>
        </span>
        I write about code, building products, minimalism, mindfulness, personal growth and journal about my life.
      </p>
      <p className="mb-4">
        Under
        <span className="bg-yellow-400 rounded px-1 py-0.5 mx-1 text-blue-800">
          <Minafi className="w-4 h-4 inline mb-0.5" /> <span>Minafi</span>
        </span>
        I write about financial indepenence, investing and my journy to retire early.
      </p>
      <p className="mb-4">
        Under
        <span className="bg-yellow-400 rounded px-1 py-0.5 mx-1 text-blue-800">
          <Hardcover className="w-4 h-4 inline mb-0.5" /> <span>Hardcover</span>
        </span>
        I write articles that users (of the startup I'm working on) would want to hear about.
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
