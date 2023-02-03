/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link'
import { GitHubIcon, MastodonIcon, MinafiIcon, HardcoverIcon } from '@/components/SocialIcons'
import { faRss } from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// export const FooterLink = ({ href, children }) => {
//   return (
//     <Link
//       href={href}
//       className="text-green-300 hover:bg-green-600 px-1 py-0.5 rounded hover:text-white font-semibold flex items-center"
//     >
//       {children}
//     </Link>
//   )
// }

// export const Footer = () => {
//   return (
//     <footer className="pt-12 bg-[#78ab5e]">
//       <Container>
//         <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">

//           <p className="mt-6 text-xs text-green-300 sm:mt-0">
//             &copy; 2001-{new Date().getFullYear()} Adam Fortuna
//           </p>
//         </div>
//       </Container>
//     </footer>
//   )
// }

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Hardcover',
      href: 'https://hardcover.app/@adam',
      icon: HardcoverIcon,
    },
    {
      name: 'Mastodon',
      href: 'https://ruby.social/@adam',
      icon: MastodonIcon,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/adamfortuna',
      icon: GitHubIcon,
    },
    {
      name: 'Minafi',
      href: 'https://minafi.com',
      icon: MinafiIcon,
    },
  ],
}

export const Footer = () => {
  return (
    <footer className="pt-4 bg-[#78ab5e]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="mt-2 pt-4 md:flex md:items-center md:justify-between">
          <div>
            <div className="mb-4">
              <h3 className="text-sm font-semibold leading-6 text-gray-900">Subscribe for new posts</h3>
              <p className="text-sm leading-6 text-gray-800">Twice a month on average. Seriously, that's it.</p>
            </div>
            <form
              className="mt-6 sm:flex sm:max-w-md lg:mt-0"
              action="https://sendy.minafi.com/subscribe"
              method="POST"
              acceptCharset="utf-8"
            >
              <input type="hidden" name="list" value="892UVTIMgB51H8qkY76305YU2A" />
              <input type="hidden" name="subform" value="yes" />
              <div className="hidden">
                <label htmlFor="hp">
                  HP <input type="text" name="hp" id="hp" />
                </label>
              </div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-yellow-800 bg-green-100 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-gray-900 placeholder-yellow-800 shadow-sm focus:border-green-600 focus:ring-green-600 sm:w-56 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-yellow-900 py-1.5 px-3 text-base font-semibold leading-7 text-white shadow-sm hover:bg-yellow-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 sm:text-sm sm:leading-6"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <a
              className="mt-8 flex w-full items-center justify-center rounded-md bg-yellow-900 py-1.5 px-3 text-base font-semibold leading-7 text-white shadow-sm hover:bg-yellow-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 sm:text-sm sm:leading-6 space-x-4"
              href="https://feeds.feedburner.com/adamfortuna"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faRss} className="w-4 h-4" size="sm" />
              <span>Subscribe to RSS</span>
            </a>
          </div>
          <div className="text-right text-xl font-semibold flex flex-col">
            <Link
              href="/about"
              className="flex-shrink border-2 border-transparent rounded-lg hover:text-green-900 hover:border-green-900 p-1"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="flex-shrink border-2 border-transparent rounded-lg hover:text-green-900 hover:border-green-900 p-1"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="flex-shrink border-2 border-transparent rounded-lg hover:text-green-900 hover:border-green-900 p-1"
            >
              Blog
            </Link>
            <Link
              href="/now"
              className="flex-shrink border-2 border-transparent rounded-lg hover:text-green-900 hover:border-green-900 p-1"
            >
              Now
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-900 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-green-50 hover:text-green-200">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6  fill-gray-900 hover:fill-green-800" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 md:order-1 md:mt-0">
            &copy; 2001-{new Date().getFullYear()} Adam Fortuna
          </p>
        </div>
      </div>
    </footer>
  )
}
