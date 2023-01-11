/* eslint-disable react/jsx-no-useless-fragment, no-nested-ternary */
import { CldImage } from 'next-cloudinary'
import { Image } from '@/components/layout/Image'

export interface ProjectIconProps {
  icon_url: string | null
  size?: number
}

export const ProjectIcon = ({ icon_url, size = 64 }: ProjectIconProps) => {
  if (!icon_url) {
    return <></>
  }

  if (icon_url && icon_url.endsWith('.svg')) {
    return (
      <span
        className={`rounded-full overflow-hidden flex items-center ${
          size >= 64 ? 'p-3' : size >= 48 ? 'p-2' : 'p-1.5'
        }`}
      >
        <Image src={icon_url} height={size} width={size} alt="Project icon" />
      </span>
    )
  }
  return <CldImage src={icon_url} className="rounded-full bg-white-400" height={size} width={size} alt="Project icon" />
}
