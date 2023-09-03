import { Press_Start_2P } from '@next/font/google'
import Link from 'next/link'

const pressStart = Press_Start_2P({
  weight: '400',
  variable: '--font-digital',
  display: 'swap',
  preload: true,
})

export const metadata = {
  title: 'The Social Media Histomap',
  description:
    'A data visualization representing thirty three years of internet & social history. Including social media from Usenet and LiveJournal, MySpace, Friendster, Facebook, Twitter, Reddit, TikTok and more.',
}

export default async function SocialHistoMapPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-yellow-50 min-h-screen">
      <div className="container lg:border-[3px] border-black mx-auto m-4 pt-6">
        <div className="mb-8 mx-4">
          <h1 className="text-3xl lg:text-5xl text-center font-semibold font-digital" style={pressStart.style}>
            The Social Media Histomap
          </h1>
          <p className="text-xl uppercase leading-7 font-semibold text-center">
            Thirty Three years of Internet &amp; Social History
          </p>
          <p className="text-center text-sm font-semibold">
            Area indicates relative active users of each social network
          </p>
          <p className="text-center text-sm text-stone-800">
            Created by{' '}
            <Link href="/" className="underline hover:no-underline">
              Adam Fortuna
            </Link>{' '}
            and inspired{' '}
            <a
              href="https://www.thehistomap.com/"
              className="underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              The Histomap
            </a>{' '}
            (1931) by John B. Sparks
          </p>
        </div>

        {children}
      </div>
    </div>
  )
}
