import { getPlaiceholder } from 'plaiceholder'
import keyBy from 'lodash/keyBy'

import { ImageType, ImageContextType } from '@/hooks/useImagePlaceholder'

const getPlaceholders = async (images: string[]) => {
  const imageBlurData = await Promise.all(
    images.map(async (image) => {
      const { base64 } = await getPlaiceholder(
        `https://res.cloudinary.com/dsx6cqi6e/image/upload/w_32/thumbnail_${image}`,
        {
          size: 4,
        },
      )

      return {
        image,
        blurDataURL: base64,
      } as ImageType
    }),
  )

  return keyBy(imageBlurData, 'image') as ImageContextType
}

export default getPlaceholders
