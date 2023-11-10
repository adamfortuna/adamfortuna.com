/* eslint-disable jsx-a11y/label-has-associated-control */
import { faChevronDown } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const dropdownClass =
  'block p-2 text-sky-800 font-semibold hover:bg-sky-600 dark:text-sky-400 dark:hover:bg-sky-400 dark:hover:text-sky-900 hover:text-white'

const MoreDropdown = () => {
  return (
    <div className="dropdown relative">
      <input id="checkbox_toggle" type="checkbox" className="hidden dropdown-checkbox" />
      <label
        htmlFor="checkbox_toggle"
        className="cursor-pointer group rounded py-1 sm:py-2 px-2 sm:px-3 text-sky-800 hover:bg-sky-600 dark:text-sky-400 dark:hover:bg-sky-400 dark:hover:text-sky-900 hover:text-white flex items-center font-semibold"
      >
        <span className="text-sm md:text-base">/</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          size="sm"
          className="ml-2 text-sky-800 group-hover:text-white dark:text-sky-400 dark:group-hover:text-sky-900 w-[16px] h-[16px]"
        />
      </label>
      <ul className="invisible opacity-0 rounded-lg shadow-lg absolute origin-top-left divide-y divide-sky-600 w-24 transisiton-all duration-300 right-0 bg-ablue-400">
        <li>
          <a href="/beliefs" className={dropdownClass}>
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
          <a href="/uses" className={dropdownClass}>
            /uses
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MoreDropdown
