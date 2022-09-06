/* eslint-disable react/jsx-no-useless-fragment, no-nested-ternary */
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

  if (parsedIcon.ext === '.svg') {
    return (
      <span
        className={`rounded-full overflow-hidden flex items-center ${
          size >= 64 ? 'p-3' : size >= 48 ? 'p-2' : 'p-1.5'
        }`}
      >
        <Image src={parsedIcon.hash} height={size} width={size} />
      </span>
    )
  }
  return <Image src={parsedIcon.hash} className="rounded-full bg-white-400" height={size} width={size} />
}
