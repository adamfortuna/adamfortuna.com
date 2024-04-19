import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/pro-solid-svg-icons'

export interface NavLinkProps {
  href: string
  icon?: IconDefinition
  children: any
  start?: boolean
}
export const PhotoNavLink = ({ href, icon, start, children }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={`h-full py-4 px-3 lg:py-4 lg:px-6 text-white hover:text-gray-200 flex items-center font-semibold hover:bg-black/30 ${
        start ? 'rounded-bl-lg' : ''
      }`}
    >
      {icon && <FontAwesomeIcon icon={icon} size="sm" className="hidden sm:inline-block sm:mr-2 w-[20px] h-[20px]" />}
      <span className="text-sm md:text-base">{children}</span>
    </Link>
  )
}
