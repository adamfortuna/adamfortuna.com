import clsx from 'clsx'
import Link from 'next/link'
import { Article } from '@/types'

interface PageThing {
  title: string
  slug: string
}
const pages: PageThing[] = [
  {
    title: 'About',
    slug: 'about',
  },
  {
    title: 'Goals',
    slug: 'goals',
  },
  {
    title: 'Beliefs',
    slug: 'beliefs',
  },
  {
    title: 'Now',
    slug: 'now',
  },
]

export const AboutUrl = ({ page, index, article }: { page: PageThing; index: number; article: Article }) => {
  return (
    <Link
      href={`/${page.slug}`}
      className={clsx(
        page.slug === article.slug
          ? 'text-gray-900 bg-sky-50'
          : 'text-gray-600 hover:text-gray-700 bg-yellow-50 hover:bg-yellow-200',
        index === 0 ? 'md:rounded-l-lg' : '',
        index === pages.length - 1 ? 'md:rounded-r-lg' : '',
        'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center focus:z-10',
      )}
    >
      <span>{page.title}</span>
      <span
        aria-hidden="true"
        className={clsx(
          page.slug === article.slug ? 'bg-ablue-500' : 'bg-yellow-400',
          'absolute inset-x-0 bottom-0 h-0.5',
        )}
      />
    </Link>
  )
}
export const AboutHeader = ({ article }: { article: Article }) => {
  return (
    <nav className="mb-4 mx-auto md:max-w-prose flex items-start" aria-label="Tabs">
      {pages.map((page, index) => (
        <AboutUrl index={index} page={page} key={page.title} article={article} />
      ))}
    </nav>
  )
}
