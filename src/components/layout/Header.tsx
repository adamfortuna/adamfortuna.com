import { faHammer, faMountain, faPencil } from '@fortawesome/pro-regular-svg-icons'

import { NavLink } from '@/components/layout/NavLink'
import { Container } from './Container'

export const Header = () => {
  return (
    <header className="absolute top-0 inset-x-0">
      <Container className="py-6">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12 justify-between text-black">
            <NavLink href="/">
              <span className="hidden sm:inline-block absolute -left-8 text-2xl opacity-0 group-hover:opacity-100 duration-400 transition-opacity group-hover:animate-waving-hand">
                👋
              </span>

              <span className="font-bold text-2xl font-handwriting">
                Adam <span className="hidden sm:inline-block">Fortuna</span>
              </span>
            </NavLink>
          </div>
          <div className="flex gap-x-2 md:gap-x-6">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects" icon={faHammer}>
              <span>Projects</span>
            </NavLink>
            <NavLink href="/articles" icon={faPencil}>
              <span>Articles</span>
            </NavLink>
            <NavLink href="/adventures" icon={faMountain}>
              <span>Adventures</span>
            </NavLink>
          </div>
        </nav>
      </Container>
    </header>
  )
}
