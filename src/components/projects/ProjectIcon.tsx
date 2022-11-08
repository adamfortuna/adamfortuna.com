/* eslint-disable react/jsx-no-useless-fragment, no-nested-ternary */
import { useMemo } from 'react'
import { Image } from '@/components/layout/Image'

export interface ProjectIconProps {
  icon_url: string | null
  size?: number
}

export const ProjectIcon = ({ icon_url, size = 64 }: ProjectIconProps) => {
  const url = useMemo(() => {
    if (!icon_url) {
      return ''
    }
    return icon_url
      .replace('https://res.cloudinary.com/dsx6cqi6e/image/upload/v1662311966/', '')
      .replace('https://res.cloudinary.com/dyogenez/image/upload/v1662311966/', '')
  }, [icon_url])

  if (!icon_url) {
    return <></>
  }

  if (url && url.endsWith('.svg')) {
    return (
      <span
        className={`rounded-full overflow-hidden flex items-center ${
          size >= 64 ? 'p-3' : size >= 48 ? 'p-2' : 'p-1.5'
        }`}
      >
        <Image src={url} height={size} width={size} />
      </span>
    )
  }
  return <Image src={url} className="rounded-full bg-white-400" height={size} width={size} />
}
