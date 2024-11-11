/* eslint-disable react/no-invalid-html-attribute, react/jsx-no-target-blank */

import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { InteractiveMountain } from '@/components/fun/InteractiveMountain'
import { GitHubIcon, LetterboxdIcon, MastodonIcon, HardcoverIcon, BlueskyIcon } from '@/components/SocialIcons'

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <InteractiveMountain />
      <Container className="relative pt-20 pb-4 sm:pb-16 md:pt-32 lg:pt-48 text-black max-w-4xl lg:max-w-5xl xl:max-w-6xl px-4 lg:px-0 lg:mx-auto">
        <p className="font-display text-5xl font-medium tracking-tight sm:text-7xl relative space-x-4">
          <span className="font-handwriting">Hey hey!</span>
          <span className="animate-waving-hand inline-block">👋</span>
        </p>
        <p className="mt-10 max-w-xl text-2xl leading-10">
          I'm <span className="font-bold">Adam Fortuna,</span> a full-stack product developer living in Salt Lake City,
          UT.
          <Link
            href="/about"
            className="sm:hidden text-lg ml-2 underline underline-offset-2 text-sky-800 hover:bg-sky-600"
          >
            Read more 👉
          </Link>
        </p>
        <div className="mt-4 max-w-xl text-2xl leading-10">
          <p className="hidden md:block">
            I enjoy <span className="font-bold">enlivening experiences</span>,{' '}
            <span className="font-bold">quantifying data</span> and{' '}
            <span className="font-bold">making playful websites</span>.
          </p>
          <ul className="space-x-2 inline-block">
            <li className="inline">
              <a
                href="https://hardcover.app/@adam"
                className="group p-1 hover:bg-sky-200 rounded-lg"
                target="_blank"
                rel="noreferrer"
                title="Hardcover"
              >
                <HardcoverIcon className="inline h-8 w-8" />
              </a>
            </li>
            <li className="inline">
              <a
                href="https://bsky.app/profile/adamfortuna.com"
                className="group p-1 hover:bg-sky-200 rounded-lg"
                target="_blank"
                rel="me"
                title="Mastodon"
              >
                <BlueskyIcon className="inline h-88 w-8 fill-bluesky group-hover:fill-indigo-700" />
              </a>
            </li>
            <li className="inline">
              <a
                href="https://ruby.social/@adam"
                className="group p-1 hover:bg-sky-200 rounded-lg"
                target="_blank"
                rel="me"
                title="Mastodon"
              >
                <MastodonIcon className="inline h-88 w-8 fill-indigo-600 group-hover:fill-indigo-700" />
              </a>
            </li>
            <li className="inline">
              <a
                href="https://letterboxd.com/adamfortuna"
                className="group p-1 hover:bg-sky-200 rounded-lg"
                target="_blank"
                rel="me"
                title="Mastodon"
              >
                <LetterboxdIcon className="inline h-8 w-8 " />
              </a>
            </li>
            <li className="inline">
              <a
                href="https://github.com/adamfortuna"
                className="group p-1 hover:bg-sky-200 rounded-lg"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <GitHubIcon className="inline h-8 w-8 fill-black group-hover:fill-gray-700" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}
