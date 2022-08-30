import Image from 'next/image'
import { Maybe, UploadFileEntityResponse } from '@/lib/graphql/output'

export interface ProjectIconProps {
  icon: Maybe<UploadFileEntityResponse> | undefined
  height?: number
  width?: number
}

export const ProjectIcon = ({ icon, width = 64, height = 64 }: ProjectIconProps) => {
  const parsedIcon = icon?.data?.attributes

  if (!parsedIcon) {
    return (
      <Image
        src="https://res.cloudinary.com/dsx6cqi6e/image/upload/v1661813895/thumbnail_hardcover_256x256_a56eebbc23.png"
        alt="Placeholder icon"
        className="rounded-full"
        height={height}
        width={width}
      />
    )
  }

  return <Image src={parsedIcon.url} className="rounded-full" height={height} width={width} />
}
