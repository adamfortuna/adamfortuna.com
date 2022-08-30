import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHammer, faMountain, faPencil } from '@fortawesome/pro-duotone-svg-icons'

import { NavLink } from '@/components/layout/NavLink'
import { Container } from './Container'

export const Header = () => {
  return (
    <header>
      <Container className="py-6">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12 justify-between">
            <Link href="/">
              <a aria-label="Home" className="group relative">
                <span className="absolute -left-8 -top-1 text-2xl opacity-0 group-hover:opacity-100 duration-400 transition-opacity group-hover:animate-waving-hand">
                  👋
                </span>
                <span className="text-slate-300 font-black">
                  Adam <span className="hidden sm:inline-block">Fortuna</span>
                </span>
              </a>
            </Link>
          </div>
          <div className="flex gap-x-2 md:gap-x-6">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">
              <FontAwesomeIcon icon={faHammer} />
              <span>Projects</span>
            </NavLink>
            <NavLink href="/articles">
              <FontAwesomeIcon icon={faPencil} />
              <span>Articles</span>
            </NavLink>
            <NavLink href="/adventures">
              <FontAwesomeIcon icon={faMountain} />
              <span>Adventures</span>
            </NavLink>
          </div>
        </nav>
      </Container>
    </header>
  )
}
