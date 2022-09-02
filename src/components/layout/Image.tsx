/* eslint-disable react/jsx-props-no-spreading, jsx-a11y/anchor-has-content */
import { useState } from 'react'
import NextImage, { ImageProps } from 'next/image'
import { useImagePlaceholder } from '@/hooks/useImagePlaceholder'

export const Image = (props: ImageProps) => {
  const { src } = props
  const blurDataURL = useImagePlaceholder(src as string)
  const [loaded, setLoaded] = useState(false)

  if (blurDataURL) {
    return (
      <NextImage
        {...props}
        blurDataURL={blurDataURL}
        placeholder="blur"
        className={loaded ? 'unblur' : ''}
        onLoadingComplete={() => setLoaded(true)}
      />
    )
  }
  return <NextImage {...props} />
}
