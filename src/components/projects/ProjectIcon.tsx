/* eslint-disable react/jsx-no-useless-fragment */
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
    return <></>
  }

  return <Image src={parsedIcon.url} className="rounded-full" height={height} width={width} />
}
