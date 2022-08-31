import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

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
    <footer>
      <Container>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <FooterLink href="/now">Now</FooterLink>
            <FooterLink href="/tools">Tools</FooterLink>

            <Link href="https://twitter.com/adamfortuna" passHref>
              <a className="group hover:bg-sky-600 px-1 py-0.5 rounded flex items-center" aria-label="Adam on Twitter">
                <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 text-sky-800 group-hover:text-white" />
              </a>
            </Link>
            <Link href="https://github.com/adamfortuna" passHref>
              <a className="group hover:bg-sky-600 px-1 py-0.5 rounded flex items-center" aria-label="Adam on GitHub">
                <FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-sky-800 group-hover:text-white" />
              </a>
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Adam Fortuna. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
