/* eslint-disable react/jsx-props-no-spreading, jsx-a11y/anchor-has-content */
import React from 'react'
import NextLink from 'next/link'
import clsx from 'clsx'

export type LinkThemeProps = {
  variant: 'default' | 'none' | 'header' | 'info' | 'tag'
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

type LinkTheme = {
  variant: {
    [K in keyof { [x: string]: LinkThemeProps } as LinkThemeProps['variant']]: string
  }
  size: {
    [K in keyof { [LinkThemeProps: string]: LinkThemeProps } as LinkThemeProps['size']]: string
  }
}

export const linkTheme: LinkTheme = {
  variant: {
    default: 'shadow-link',
    none: '',
    header: 'shadow-link text-2xl',
    info: 'link text-slate-400 text-sm hover:underline',
    tag: 'bg-gray-200 px-1 py-0.5 rounded-sm hover:bg-gray-300 hover:text-black',
  },
  size: {
    xs: 'text-sm',
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl',
  },
}

export type LinkProps = {
  variant?: LinkThemeProps['variant']
  size?: LinkThemeProps['size']
  className?: string
  href: string
}

export const Link = React.forwardRef<HTMLLinkElement, React.PropsWithChildren<LinkProps>>(
  ({ variant = 'default', size = 'md', className = '', href, ...props }, ref) => {
    const newClassName = clsx(linkTheme.variant[variant], linkTheme.size[size], className)

    return href.indexOf('http') === 0 ? (
      <a ref={ref} href={href} className={newClassName} {...props} />
    ) : (
      <NextLink ref={ref} href={href} passHref>
        <a className={newClassName} {...props} />
      </NextLink>
    )
  },
)
