/* eslint-disable @next/next/no-img-element, @typescript-eslint/no-unnecessary-condition */
import Link from 'next/link'
import Af from '@/images/af.svg'
import { faHammer, faPencil, faCamera } from '@fortawesome/pro-regular-svg-icons'
import { PhotoNavLink } from './PhotoNavLink'
import PhotoMoreDropdown from './PhotoMoreDropdown'

export const PhotoHeader = () => {
  return (
    <div className="flex justify-between absolute z-10 w-full">
      <div>
        <Link
          href={String(process.env.NEXT_PUBLIC_URL)}
          className="z-10 group py-4 px-3 lg:py-4 lg:px-6 hover:bg-sky-600 dark:hover:bg-sky-400 dark:hover:text-sky-900 hover:text-white flex items-center font-semibold h-card u-url group-hover:text-white bg-black/40 rounded-br p-4"
          rel="me"
        >
          <span className="sr-only p-name">Adam Fortuna</span>
          <Af className="w-10 h-8 text-white dark:text-yellow-400" />
          <span className="hidden sm:inline-block absolute -right-8 text-2xl opacity-0 group-hover:opacity-100 duration-400 transition-opacity group-hover:animate-waving-hand">
            👋
          </span>
        </Link>
      </div>
      <nav className="flex items-end md:items-center bg-black/40 rounded-bl-lg">
        <PhotoNavLink href="/about" start>
          About
        </PhotoNavLink>
        <PhotoNavLink href="/projects" icon={faHammer}>
          Projects
        </PhotoNavLink>
        <PhotoNavLink href="/blog" icon={faPencil}>
          Blog
        </PhotoNavLink>
        <PhotoNavLink href="/photos" icon={faCamera}>
          Photos
        </PhotoNavLink>
        <PhotoMoreDropdown />
      </nav>
    </div>
  )
}
