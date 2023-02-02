/* eslint-disable @next/next/no-img-element */
import { faHammer, faPencil } from '@fortawesome/pro-regular-svg-icons'
import Link from 'next/link'
import Cloud from '@/images/cloud.svg'

import Af from '@/images/af.svg'
import { NavLink } from '@/components/layout/NavLink'
import clsx from 'clsx'
import { Container } from './Container'

/*
const SunIcon = (props: any) => {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  )
}

const MoonIcon = (props: any) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const ModeToggle = () => {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const isSystemDarkMode = darkModeMediaQuery.matches
    const isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="ml-2 group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
    </button>
  )
}
*/

export const Header = ({ isHomePage = false }: { isHomePage?: boolean }) => {
  return (
    <header className={clsx('inset-x-0', isHomePage ? 'absolute' : 'bg-[#B6E0EF]')}>
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
                  src="https://res.cloudinary.com/dyogenez/images/w_900/w_400,h_400,c_thumb/v1675280471/wordpress/adam_6761814f5/adam_6761814f5?_i=AA"
                />
                <span className="p-note">
                  Hey hey! I'm a full-stack product developer in Salt Lake City, UT. I love enlivening experiences,
                  visualizing data, and making playful websites.
                </span>
              </span>
            </Link>
          </div>
          <div className="flex md:gap-x-6 items-end md:items-center">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects" icon={faHammer}>
              Projects
            </NavLink>
            <NavLink href="/blog" icon={faPencil}>
              Blog
            </NavLink>

            {/*
            <ModeToggle />
             <NavLink href="/adventures" icon={faMountain}>
              <span>Adventures</span>
            </NavLink> */}
          </div>
        </nav>
      </Container>
      {!isHomePage && (
        <div className="h-16 md:h-24 lg:h-32 overflow-hidden md:-mt-[40px] relative">
          <Cloud className="w-full xl:bg-cover relative" />
          <div className="md:hidden bg-white absolute bottom-0 h-8 md:h-2 w-full" />
        </div>
      )}
    </header>
  )
}
