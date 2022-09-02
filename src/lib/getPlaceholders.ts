import { getPlaiceholder } from 'plaiceholder'
import keyBy from 'lodash/keyBy'

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
      }
    }),
  )

  return keyBy(imageBlurData, 'image')
}

export default getPlaceholders
