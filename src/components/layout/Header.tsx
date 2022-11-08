import { faHammer, faPencil } from '@fortawesome/pro-regular-svg-icons'
// import { faHammer, faMountain, faPencil } from '@fortawesome/pro-regular-svg-icons'

import Af from '@/images/af.svg'
import { NavLink } from '@/components/layout/NavLink'
import { Container } from './Container'

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
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
    </button>
  )
}

export const Header = () => {
  return (
    <header className="absolute top-0 inset-x-0">
      <Container className="py-2 md:py-6">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12 justify-between text-black dark:text-yellow-400">
            <NavLink href="/">
              <span className="hidden sm:inline-block absolute -left-8 text-2xl opacity-0 group-hover:opacity-100 duration-400 transition-opacity group-hover:animate-waving-hand">
                👋
              </span>

              <Af className="w-10 h-8 text-sky-800 dark:text-yellow-400 group-hover:text-white md:hidden" />

              <span className="font-bold text-2xl font-handwriting hidden md:inline-block">Adam Fortuna</span>
            </NavLink>
          </div>
          <div className="flex md:gap-x-6 items-end md:items-center">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects" icon={faHammer}>
              <span>Projects</span>
            </NavLink>
            <NavLink href="/articles" icon={faPencil}>
              <span>Articles</span>
            </NavLink>
            <ModeToggle />
            {/* <NavLink href="/adventures" icon={faMountain}>
              <span>Adventures</span>
            </NavLink> */}
          </div>
        </nav>
      </Container>
    </header>
  )
}
