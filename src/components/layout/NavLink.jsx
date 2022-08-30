import Link from 'next/link'

export const NavLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="rounded py-2 px-3 text-base text-slate-400 hover:bg-slate-800 hover:text-white space-x-2 flex items-center font-semibold">
        {children}
      </a>
    </Link>
  )
}
