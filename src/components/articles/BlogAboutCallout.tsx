import { useState } from 'react'
import { faRss, faHighlighter } from '@fortawesome/pro-duotone-svg-icons'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Af from '@/images/af.svg'
import Minafi from '@/images/minafi.svg'
import Hardcover from '@/images/hardcover.svg'
import { faChevronDown, faChevronRight } from '@fortawesome/pro-solid-svg-icons'
import clsx from 'clsx'

const ExpandedKey = 'blog-about-expanded'

const BlogAboutCallout = () => {
  const currentExpanded = typeof localStorage !== 'undefined' ? localStorage.getItem(ExpandedKey) : true
  const [expanded, setExpanded] = useState(!currentExpanded || currentExpanded === '1')

  const toggleExpanded = () => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(ExpandedKey, !expanded ? '1' : '0')
    }
    setExpanded((e) => {
      return !e
    })
  }

  return (
    <div className="bg-yellow-200 rounded leading-5">
      <button
        type="button"
        className={clsx(
          'p-2 w-full rounded text-blue-700 font-bold text-xl flex items-center justify-between space-x-2 hover:bg-yellow-400 bg-yellow-300',
          expanded ? 'border-b border-yellow-400 rounded-b-none' : '',
        )}
        onClick={toggleExpanded}
      >
        <span>About this blog</span>
        <FontAwesomeIcon icon={expanded ? faChevronDown : faChevronRight} />
      </button>
      <div className={clsx('p-4 flex flex-row md:space-x-4 items-center', expanded ? '' : 'hidden')}>
        <FontAwesomeIcon icon={faRss} className="hidden md:block text-blue-700 w-[48px]" size="3x" />
        <div className="text-blue-500">
          <p className="mb-4">
            Welcome to my blog! I've writen about various topics since 2001. Here you'll find (almost)
            <Link href="/blog/all" passHref>
              <a className="bg-yellow-400 hover:bg-yellow-500 rounded px-1 py-0.5 mx-1 text-blue-800">everything</a>
            </Link>
            I've ever written. Browse by active project:
          </p>
          <p className="mb-4">
            <Link href="/blog/projects/adamfortuna" passHref>
              <a className="bg-yellow-400 hover:bg-yellow-500 rounded px-1 py-0.5 mx-1 text-blue-800">
                <Af className="w-4 h-4 text-blue-700 inline mb-0.5" /> <span>This blog</span>
              </a>
            </Link>{' '}
            Mindfulness, tech, minimalism, code, personal growth and my life.
          </p>
          <p className="mb-4">
            <Link href="/blog/projects/minafi" passHref>
              <a className="bg-yellow-400 hover:bg-yellow-500 rounded px-1 py-0.5 mx-1 text-blue-800">
                <Minafi className="w-4 h-4 inline mb-0.5" /> <span>Minafi</span>
              </a>
            </Link>{' '}
            Financial indepenence, investing and my journy to retire early (36 ✔️).
          </p>
          <p className="mb-4">
            <Link href="/blog/projects/hardcover" passHref>
              <a className="bg-yellow-400 hover:bg-yellow-500 rounded px-1 py-0.5 mx-1 text-blue-800">
                <Hardcover className="w-4 h-4 inline mb-0.5" /> <span>Hardcover</span>
              </a>
            </Link>{' '}
            Building Hardcover in public.
          </p>
          <p>
            Check out some
            <Link href="/blog/tags/highlights" passHref>
              <a className="bg-yellow-400 hover:bg-yellow-500 rounded px-1 py-0.5 mx-1 text-blue-800 space-x-2">
                <FontAwesomeIcon icon={faHighlighter} className="text-blue-700" size="1x" />
                <span>highlights</span>
              </a>
            </Link>
            and stay in touch by following me on{' '}
            <a href="https://ruby.social/@adam" className="link--blue" target="_blank" rel="noreferrer">
              Mastodon
            </a>
            , subscribing to my{' '}
            <Link href="/newsletter" passHref>
              <a className="link--blue">newsletter</a>
            </Link>{' '}
            or subscribing to my{' '}
            <a href="/feed.xml" target="_blank" className="link--blue">
              RSS feed
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogAboutCallout
