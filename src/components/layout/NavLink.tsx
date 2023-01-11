import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/pro-solid-svg-icons'

export interface NavLinkProps {
  href: string
  icon?: IconDefinition
  children: any
}
export const NavLink = ({ href, icon, children }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="group rounded py-1 sm:py-2 px-2 sm:px-3 text-sky-800 hover:bg-sky-600 dark:text-sky-400 dark:hover:bg-sky-400 dark:hover:text-sky-900 hover:text-white flex items-center font-semibold"
    >
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          size="sm"
          className="hidden sm:inline-block sm:mr-2 text-sky-800 group-hover:text-white dark:text-sky-400 dark:group-hover:text-sky-900 w-[16px] h-[16px]"
        />
      )}
      <span className="text-sm md:text-base">{children}</span>
    </Link>
  )
}
