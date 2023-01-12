/* eslint-disable react/no-invalid-html-attribute, react/jsx-no-target-blank */

import { Container } from '@/components/layout/Container'
import { InteractiveMountain } from '@/components/fun/InteractiveMountain'
import { GitHubIcon, MastodonIcon, HardcoverIcon } from '@/components/SocialIcons'

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <InteractiveMountain />
      <Container className="relative pt-20 pb-16 md:pt-32 lg:pt-48 text-black max-w-4xl lg:max-w-5xl xl:max-w-6xl px-4 lg:px-0 lg:mx-auto">
        <p className="font-display text-5xl font-medium tracking-tight sm:text-7xl relative space-x-4">
          <span className="font-handwriting">Hey hey!</span>
          <span className="animate-waving-hand inline-block">👋</span>
        </p>
        <p className="mt-10 max-w-xl text-2xl leading-10">
          I'm <span className="font-bold">Adam Fortuna,</span> a full-stack product developer living in Salt Lake City,
          UT.
        </p>
        <div className="mt-4 max-w-xl text-2xl leading-10">
          <p>
            I love <span className="font-bold">enlivening experiences</span>,{' '}
            <span className="font-bold">quantifying data</span> and{' '}
            <span className="font-bold">making playful websites</span>.
          </p>
          <ul className="space-x-2 inline-block">
            <li className="inline">
              <a
                href="https://hardcover.app/@adam"
                className="group"
                target="_blank"
                rel="noreferrer"
                title="Hardcover"
              >
                <HardcoverIcon className="inline h-6 w-6 fill-sky-800 group-hover:fill-indigo-600" />
              </a>
            </li>
            <li className="inline">
              <a href="https://ruby.social/@adam" className="group" target="_blank" rel="me" title="Mastodon">
                <MastodonIcon className="inline h-6 w-6 fill-sky-800 group-hover:fill-indigo-700" />
              </a>
            </li>
            <li className="inline">
              <a
                href="https://github.com/adamfortuna"
                className="group"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <GitHubIcon className="inline h-6 w-6 fill-sky-800 group-hover:fill-black" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}
