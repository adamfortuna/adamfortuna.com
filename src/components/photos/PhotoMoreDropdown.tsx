/* eslint-disable jsx-a11y/label-has-associated-control */
import { faChevronDown } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const dropdownClass = 'block px-6 py-4 text-white font-semibold hover:bg-black/20'

const PhotoMoreDropdown = () => {
  return (
    <div className="dropdown relative h-full">
      <input id="checkbox_toggle" type="checkbox" className="hidden dropdown-checkbox" />
      <label
        htmlFor="checkbox_toggle"
        className="block cursor-pointer h-full group py-4 px-3 lg:py-4 lg:px-6 text-white hover:text-gray-200 flex items-center font-semibold hover:bg-black/30"
      >
        <span className="text-sm md:text-base">/</span>
        <FontAwesomeIcon icon={faChevronDown} size="sm" className="ml-2  w-[20px] h-[20px]" />
      </label>
      <ul className="invisible opacity-0 rounded-bl-lg shadow-lg absolute origin-top-left divide-y divide-black/800 w-32 transisiton-all duration-300 right-0 bg-black/50">
        <li>
          <a href="/beliefs" className={`${dropdownClass} rounded-t-lg`}>
            /beliefs
          </a>{' '}
        </li>
        <li>
          <a href="/favs" className={dropdownClass}>
            /favs
          </a>{' '}
        </li>
        <li>
          <a href="/goals" className={dropdownClass}>
            /goals
          </a>{' '}
        </li>
        <li>
          <a href="/now" className={dropdownClass}>
            /now
          </a>{' '}
        </li>
        <li>
          <a href="/reading" className={dropdownClass}>
            /reading
          </a>
        </li>
        <li>
          <a href="/uses" className={`${dropdownClass} rounded-b-lg`}>
            /uses
          </a>
        </li>
      </ul>
    </div>
  )
}

export default PhotoMoreDropdown
