/* eslint-disable react/jsx-no-useless-fragment */
import { useMemo } from 'react'
import { ComponentSharedLinkInput } from '@/lib/graphql/output'
import sortBy from 'lodash/sortBy'
import { Link, LinkThemeProps } from '@/components/layout/Link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLink, faMusic, faVideo, faHardDrive } from '@fortawesome/pro-regular-svg-icons'

export interface ProjectLinksProps {
  links?: ComponentSharedLinkInput[]
  size?: LinkThemeProps['size']
}

const lookupIcon = (link: ComponentSharedLinkInput) => {
  if (link.category === 'github') {
    return faGithub
  }
  if (link.category === 'music') {
    return faMusic
  }
  if (link.category === 'video') {
    return faVideo
  }
  if (link.category === 'archive') {
    return faHardDrive
  }
  if (link.url?.indexOf('https://twitter.com') !== -1) {
    return faTwitter
  }
  if (link.url.indexOf('https://github.com') !== -1) {
    return faGithub
  }
  if (link.url.indexOf('https://web.archive.org') !== -1) {
    return faHardDrive
  }
  return faLink
}

const ProjectLink = ({ link, size }: { link: ComponentSharedLinkInput; size: LinkThemeProps['size'] }) => {
  const icon = useMemo(() => {
    return lookupIcon(link)
  }, [link])
  return (
    <li className="mr-2" key={link.url}>
      <Link
        target="_blank"
        href={link.url as string}
        size={size}
        variant="button"
        className="flex space-x-2 items-center"
      >
        <FontAwesomeIcon icon={icon} className="h-4 w-4 text-sky-800 group-hover:text-black" />
        <span>{link.title}</span>
      </Link>
    </li>
  )
}
export const ProjectLinks = ({ links, size = 'sm' }: ProjectLinksProps) => {
  if (!links) {
    return <></>
  }

  const sortedLinks = sortBy(links, (t) => t.title)

  return (
    <ul className="flex flex-wrap font-semibold leading-9">
      {sortedLinks.map((link) => (
        <ProjectLink key={link.url} link={link} size={size} />
      ))}
    </ul>
  )
}