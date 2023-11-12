/* eslint-disable @next/next/no-img-element */
import { faHammer, faPencil } from '@fortawesome/pro-regular-svg-icons'
import Link from 'next/link'
import Cloud from '@/images/cloud.svg'
import Sun from '@/images/sun.svg'

import Af from '@/images/af.svg'
import { NavLink } from '@/components/layout/NavLink'
import clsx from 'clsx'
import { Container } from './Container'
import MoreDropdown from './MoreDropdown'

export const Header = ({ isHomePage = false }: { isHomePage?: boolean }) => {
  return (
    <header className={clsx('inset-x-0', isHomePage ? 'absolute' : 'bg-sky-200')}>
      <Container className="py-2 md:py-6 px-2 md:px-0">
        <nav className="relative z-50 flex justify-between pr-2">
          <div className="flex items-center md:gap-x-12 justify-between text-black dark:text-yellow-400 relative">
            <Link
              href={String(process.env.NEXT_PUBLIC_URL)}
              className="group rounded py-1 sm:py-2 px-2 sm:px-3 text-sky-800 hover:bg-sky-600 dark:text-sky-400 dark:hover:bg-sky-400 dark:hover:text-sky-900 hover:text-white flex items-center font-semibold h-card u-url"
              rel="me"
            >
              <span className="sr-only p-name">Adam Fortuna</span>
              <Af className="w-10 h-8 text-sky-800 dark:text-yellow-400 group-hover:text-white md:hidden" />
              <span className="font-bold text-2xl font-handwriting hidden md:inline-block">Adam Fortuna</span>
              <span className="hidden sm:inline-block absolute -right-8 text-2xl opacity-0 group-hover:opacity-100 duration-400 transition-opacity group-hover:animate-waving-hand">
                👋
              </span>
              <span className="hidden">
                <img
                  className="u-photo"
                  alt="Avatar for Adam Fortuna"
                  loading="lazy"
                  src="https://storage.cloud.google.com/adamfortuna/blog/adam_6761814f5.jpeg"
                />
                <span className="p-note">
                  Hey hey! I'm a full-stack product developer in Salt Lake City, UT. I love enlivening experiences,
                  visualizing data, and making playful websites.
                </span>
              </span>
            </Link>
          </div>
          {!isHomePage && <Sun className="relative h-12 w-16 md:h-20 md:w-24 lg:h-24 lg:w-32 xl:h-32" />}
          <div className="flex md:gap-x-6 items-end md:items-center">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects" icon={faHammer}>
              Projects
            </NavLink>
            <NavLink href="/blog" icon={faPencil}>
              Blog
            </NavLink>
            <MoreDropdown />
          </div>
        </nav>
      </Container>
      {!isHomePage && (
        <div className="h-16 md:h-24 lg:h-32 xl:h-48 overflow-hidden md:-mt-[40px] lg:-mt[60px] xl:-mt[60px] relative">
          <Cloud className="w-full xl:bg-cover relative" />
          <div className="md:hidden bg-white absolute bottom-0 h-8 md:h-2 w-full" />
        </div>
      )}
    </header>
  )
}
