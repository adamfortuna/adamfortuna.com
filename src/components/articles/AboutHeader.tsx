import clsx from 'clsx'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut, faFlagCheckered, faHeart, faClock, IconDefinition } from '@fortawesome/pro-regular-svg-icons'
import { Article } from '@/types'

interface PageThing {
  title: string
  slug: string
  icon: IconDefinition
}
const pages: PageThing[] = [
  {
    title: 'About',
    slug: 'about',
    icon: faUserAstronaut,
  },
  {
    title: 'Goals',
    slug: 'goals',
    icon: faFlagCheckered,
  },
  {
    title: 'Beliefs',
    slug: 'beliefs',
    icon: faHeart,
  },
  {
    title: 'Now',
    slug: 'now',
    icon: faClock,
  },
]

export const AboutUrl = ({ page, index, article }: { page: PageThing; index: number; article: Article }) => {
  return (
    <Link
      href={`/${page.slug}`}
      className={clsx(
        page.slug === article.slug ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
        index === 0 ? 'rounded-l-lg' : '',
        index === pages.length - 1 ? 'rounded-r-lg' : '',
        'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10',
      )}
    >
      <span className="flex items-center flex-row space-x-4">
        <FontAwesomeIcon icon={page.icon} size="sm" className="w-6 h-6 text-ablue-500" />
        <span>{page.title}</span>
      </span>
      <span
        aria-hidden="true"
        className={clsx(
          page.slug === article.slug ? 'bg-ablue-500' : 'bg-transparent',
          'absolute inset-x-0 bottom-0 h-0.5',
        )}
      />
    </Link>
  )
}
export const AboutHeader = ({ article }: { article: Article }) => {
  return (
    <nav className="mb-4 mx-auto max-w-5xl isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
      {pages.map((page, index) => (
        <AboutUrl index={index} page={page} key={page.title} article={article} />
      ))}
    </nav>
  )
}
