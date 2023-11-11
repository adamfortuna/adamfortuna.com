/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link'
import { GitHubIcon, MastodonIcon, MinafiIcon, HardcoverIcon } from '@/components/SocialIcons'
import { faRss } from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Ground from '@/images/ground.svg'

const navigation = {
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
    <footer className="pt-4 bg-sky-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <Ground className="w-full" />

      <div className="relative z-10 bg-[#78ab5e] ">
        <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Subscribe to new posts</h3>
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
                  className="w-full min-w-0 appearance-none rounded-md border-transparent bg-[#9fca75] px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-gray-900 placeholder-[#274928] shadow-sm  sm:w-56 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md bg-[#f3ce84] py-1.5 px-3 text-base font-semibold leading-7 text-yellow-800 shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 sm:text-sm sm:leading-6"
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              <a
                className="mt-8 flex w-full items-center justify-center rounded-md bg-[#f3ce84] py-1.5 px-3 text-base font-semibold leading-7 text-yellow-800 shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 sm:text-sm sm:leading-6 space-x-4"
                href="https://feeds.feedburner.com/adamfortuna"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faRss} className="w-4 h-4" size="sm" />
                <span>Subscribe to RSS</span>
              </a>
            </div>
            <div className="text-right text-xl font-semibold flex flex-row md:flex-col mt-4 md:mt-0 justify-center md:justify-end space-x-4 md:space-x-0">
              <Link href="/about" className="link--footer">
                About
              </Link>
              <Link href="/projects" className="link--footer">
                Projects
              </Link>
              <Link href="/blog" className="link--footer">
                Blog
              </Link>
              <Link href="/now" className="link--footer">
                Now
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-900 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2 justify-center md:justify-end">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-green-50 hover:text-green-200">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6  fill-gray-900 hover:fill-green-800" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-xs leading-5 md:order-1 md:mt-0 text-center md:text-left">
              &copy; 2001-{new Date().getFullYear()} Adam Fortuna
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
