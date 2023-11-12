/* eslint-disable @next/next/no-img-element */
import { faMastodon } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFeed, faNewspaper } from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export const Follow = () => (
  <div className="card max-w-4xl mx-auto gap-8 leading-6">
    <h2 className="font-semibold text-lg mb-4">Let's keep in touch 🧑‍🤝‍🧑</h2>
    <ul className="space-y-2">
      <li>
        <FontAwesomeIcon icon={faEnvelope} className="pr-1 text-blue-600" />
        Send me an email at{' '}
        <a href="mailto:heyhey@adamfortuna.com" target="_blank" className="link--blue" rel="noreferrer">
          heyhey@adamfortuna.com
        </a>
      </li>
      <li>
        <FontAwesomeIcon icon={faMastodon} className="pr-1 text-blue-600" />
        Follow me on Mastodon at{' '}
        <a href="https://ruby.social/@adam" target="_blank" className="link--blue" rel="noreferrer">
          @adam@ruby.social
        </a>
      </li>
      <li>
        <FontAwesomeIcon icon={faNewspaper} className="pr-1 text-blue-600" />
        Subscribe to my{' '}
        <Link href="/newsletter" className="link--blue">
          monthly newsletter
        </Link>
      </li>
      <li>
        <FontAwesomeIcon icon={faFeed} className="pr-1 text-blue-600" />
        Subscribe to my{' '}
        <a href="/feed" target="_blank" className="link--blue">
          RSS feed
        </a>
      </li>
    </ul>
  </div>
)
