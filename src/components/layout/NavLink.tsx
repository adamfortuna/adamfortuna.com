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
    <Link href={href}>
      <a className="group rounded py-2 px-3 text-base text-sky-800 hover:bg-sky-600 hover:text-white flex items-center font-semibold">
        {icon && (
          <FontAwesomeIcon icon={icon} className="hidden sm:inline-block text-sky-800 group-hover:text-white mr-2" />
        )}
        {children}
      </a>
    </Link>
  )
}
