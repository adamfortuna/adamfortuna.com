/* eslint-disable react/jsx-props-no-spreading, jsx-a11y/anchor-has-content */
import NextImage, { ImageProps } from 'next/image'
import { useImagePlaceholder } from '@/hooks/useImagePlaceholder'

export const Image = (props: ImageProps) => {
  const { src } = props
  const { blurDataURL } = useImagePlaceholder(src as string)

  if (blurDataURL) {
    return <NextImage blurDataURL={blurDataURL} placeholder="blur" {...props} />
  }
  return <NextImage {...props} />
}
