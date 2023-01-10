import { useEffect, useState } from 'react'
import { faRss, faStar, faTypewriter } from '@fortawesome/pro-duotone-svg-icons'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Af from '@/images/af.svg'
import Minafi from '@/images/minafi.svg'
import Hardcover from '@/images/hardcover.svg'
import { faChevronDown, faChevronRight } from '@fortawesome/pro-solid-svg-icons'
import clsx from 'clsx'

const ExpandedKey = 'blog-about-expanded'

const getExpandedFromLocalStorage = (): string | null => {
  return typeof localStorage !== 'undefined' ? localStorage.getItem(ExpandedKey) : '1'
}
const BlogAboutCallout = () => {
  const [expanded, setExpanded] = useState(true)

  const toggleExpanded = () => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(ExpandedKey, !expanded ? '1' : '0')
    }
    setExpanded((e) => {
      return !e
    })
  }

  useEffect(() => {
    const e = getExpandedFromLocalStorage()
    setExpanded(e === null || e === '1')
  }, [])

  return (
    <div className="bg-yellow-200 rounded leading-5">
      <button
        type="button"
        className={clsx(
          'p-2 w-full rounded text-ablue-700 font-bold text-xl flex items-center justify-between space-x-2 hover:bg-yellow-400 bg-yellow-300',
          expanded ? 'border-b border-yellow-400 rounded-b-none' : '',
        )}
        onClick={toggleExpanded}
      >
        <span>About this blog</span>
        <FontAwesomeIcon icon={expanded ? faChevronDown : faChevronRight} className="max-w-[23px]" />
      </button>
      <div className={clsx('p-4 flex flex-row md:space-x-4 items-center', expanded ? '' : 'hidden')}>
        <FontAwesomeIcon icon={faRss} className="hidden md:block text-ablue-700 w-[48px]" size="3x" />
        <div className="text-ablue-500">
          <p className="mb-4">
            Welcome to my blog! I've writen about various topics since 2001.Tou'll find (almost)
            <Link href="/blog/all" passHref>
              <a className="bg-yellow-400 hover:bg-yellow-500 rounded px-1 py-0.5 mx-1 text-blue-800 space-x-2">
                <FontAwesomeIcon icon={faTypewriter} className="text-blue-800 w-4 h-4 inline" size="1x" />
                <span>everything</span>
              </a>
            </Link>
            I've ever written, some are external links. Browse by active project:
          </p>
          <p className="mb-4">
            <Link href="/blog/projects/adamfortuna" passHref>
              <a className="bg-yellow-400 hover:bg-yellow-500 rounded px-1 py-0.5 mx-1 text-blue-800">
                <Af className="w-4 h-4 text-ablue-700 inline mb-0.5" /> <span>This blog</span>
              </a>
            </Link>{' '}
            Exploring the intersection of minimalism, mindfulness and technology + my journal.
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
                <FontAwesomeIcon icon={faStar} className="text-blue-800 inline w-4 h-4" size="1x" />
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
            <a href="/api/feed" target="_blank" className="link--blue">
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
