/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @next/next/no-img-element, @typescript-eslint/no-unnecessary-condition */
import { PhotoPost } from '@/types'
import { faCaretDown } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface PhotoArticleHeaderProps {
  article: PhotoPost
}

const titleLink = 'block text-gray-100 py-2 px-4 hover:text-gray-200'
const inactiveLink = 'bg-black/50 hover:bg-black/80'
const dropdownLink = `${titleLink} ${inactiveLink}`
const SeriesNavigation = ({ article }: PhotoArticleHeaderProps) => {
  return (
    <div className="group absolute z-10 top-2 right-2">
      <FontAwesomeIcon
        icon={faCaretDown}
        size="1x"
        className="absolute top-2 right-2 w-6 h-6 text-gray-200 group-hover:text-gray-400"
      />
      <a
        className={`${titleLink} bg-black/30 rounded border-2 border-black/30 group-hover:rounded-b-none group-hover:bg-black/50 hover:bg-black/60`}
        href="/photos/japan"
      >
        <p className="font-bold text-lg">{article.title}</p>
        <p className="text-sm">{article.excerpt}</p>
      </a>
      <ul className="group-hover:visible invisible transition-all duration-300 opacity-0 group-hover:opacity-100 top-[80px] group-hover:top-[70px] absolute border-2 border-black/30 ">
        <li className="title-nav--list-item">
          <a className={dropdownLink} href="/photos/japan/kyoto">
            <span className="block font-bold text-lg">Kyoto</span>
            <span className="block text-sm">Kyoto, Osaka, Gion, Nara, Fushimi Inari</span>
          </a>
        </li>
        <li className="title-nav--list-item">
          <a className={dropdownLink} href="/photos/japan/hakone">
            <span className="block font-bold text-lg">Hakone</span>
            <span className="block text-sm">Mountains of Hakone</span>
          </a>
        </li>
        <li className="title-nav--list-item">
          <a className={dropdownLink} href="/photos/japan/tokyo">
            <span className="block font-bold text-lg">Tokyo</span>
            <span className="block text-sm">Harajuku, Shinjuku, Ueno Park</span>
          </a>
        </li>
        <li className="title-nav--list-item">
          <a className={dropdownLink} href="/photos/japan/takeaways">
            <span className="block font-bold text-lg">Takeaways</span>
            <span className="block text-sm">What to expect when going to Japan</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
export default SeriesNavigation
