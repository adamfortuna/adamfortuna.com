import Link from 'next/link'

import { Container } from '@/components/layout/Container'
import { NavLink } from '@/components/layout/NavLink'

export const Header = () => {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12 justify-between">
            <Link href="/">
              <a aria-label="Home" className="group">
                <span className="hidden md:group-hover:block absolute -left-6">👋</span>
                <span>
                  Adam <span className="hidden sm:inline-block">Fortuna</span>
                </span>
              </a>
            </Link>
          </div>
          <div className="flex gap-x-2 md:gap-x-6">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/now">Now</NavLink>
            <NavLink href="/tools">Tools</NavLink>
          </div>
          <div className="flex gap-x-2 md:gap-x-6">
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/articles">Articles</NavLink>
            <NavLink href="/adventures">Adventures</NavLink>
          </div>
        </nav>
      </Container>
    </header>
  )
}
