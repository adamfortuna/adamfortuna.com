/* eslint-disable react/jsx-props-no-spreading, jsx-a11y/anchor-has-content */
import NextLink from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid: 'underline hover:no-underline',
}

const variantStyles = {
  solid: {
    internal: 'text-sky-800',
  },
}

export const Link = ({ variant = 'solid', color = 'internal', className = '', href, ...props }) => {
  const newClassName = clsx(baseStyles[variant], variantStyles[variant][color], className)

  return href.indexOf('http') === 0 ? (
    <a href={href} className={newClassName} {...props} />
  ) : (
    <NextLink href={href} passHref>
      <a className={newClassName} {...props} />
    </NextLink>
  )
}
