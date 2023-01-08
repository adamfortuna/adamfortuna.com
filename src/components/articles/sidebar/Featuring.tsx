import Link from 'next/link'
import { faHighlighter, faFire, faTypewriter } from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FeaturingMini = () => (
  <div className="sm:hidden mt-8">
    <p>
      Currently showing <span className="font-bold text-xl text-blue-700">Highlights</span>
      <div className="" />
    </p>
    <p />
  </div>
)

const Featuring = () => (
  <div>
    <p className="font-handwriting text-4xl text-blue-700 mb-4 underline underline-offset-4 decoration-yellow-300">
      Featuring
    </p>

    <div className="space-y-1">
      <Link href="/blog/tags/highlights">
        <a className="flex flex-row items-center hover:bg-blue-300/20 rounded space-x-4 p-2">
          <FontAwesomeIcon icon={faHighlighter} className="text-blue-700 w-[32px] md:w-[48px]" size="3x" />
          <div className="flex flex-col">
            <span className="font-bold text-xl text-blue-700">Highlights</span>
            <span className="text-blue-200 font-semibold">My favorites</span>
          </div>
        </a>
      </Link>

      <Link href="/blog/tags/popular">
        <a className="flex flex-row items-center hover:bg-blue-300/20 rounded space-x-4 p-2">
          <FontAwesomeIcon icon={faFire} className="text-blue-700 w-[32px] md:w-[48px]" size="3x" />
          <div className="flex flex-col">
            <span className="font-bold text-xl text-blue-700">
              <span className="hidden md:inline">Most </span>Popular
            </span>
            <span className="text-blue-200 font-semibold">The top 10%</span>
          </div>
        </a>
      </Link>

      <Link href="/blog/all">
        <a className="flex flex-row items-center hover:bg-blue-300/20 rounded space-x-4 p-2">
          <FontAwesomeIcon icon={faTypewriter} className="text-blue-700 w-[32px] md:w-[48px]" size="3x" />
          <div className="flex flex-col">
            <span className="font-bold text-xl text-blue-700">Everything</span>
            <span className="text-blue-200 font-semibold">Some of it good</span>
          </div>
        </a>
      </Link>
    </div>
  </div>
)

export default Featuring
