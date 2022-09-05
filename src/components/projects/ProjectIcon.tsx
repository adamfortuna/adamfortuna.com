/* eslint-disable react/jsx-no-useless-fragment */
import { Image } from '@/components/layout/Image'
import { Maybe, UploadFileEntityResponse } from '@/lib/graphql/output'

export interface ProjectIconProps {
  icon: Maybe<UploadFileEntityResponse> | undefined
  size?: number
}

export const ProjectIcon = ({ icon, size = 64 }: ProjectIconProps) => {
  const parsedIcon = icon?.data?.attributes

  if (!parsedIcon) {
    return <></>
  }

  return <Image src={parsedIcon.hash} className="rounded-full bg-gray-400" height={size} width={size} />
}
