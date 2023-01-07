import Link from 'next/link'
import { Container } from '@/components/layout/Container'

export const FooterLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="text-sky-800 hover:bg-sky-600 px-1 py-0.5 rounded hover:text-white font-semibold flex items-center">
        {children}
      </a>
    </Link>
  )
}

// text-sky-800 hover:bg-sky-600 hover:text-white

export const Footer = () => {
  return (
    <footer className="mt-12">
      <Container>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <FooterLink href="/now">Now</FooterLink>
            <FooterLink href="/tools">Tools</FooterLink>
          </div>
          <p className="mt-6 text-xs text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Adam Fortuna. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
