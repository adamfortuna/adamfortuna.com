import { createContext, useContext } from 'react'

interface ImageContextType {
  image: string
  blurDataURL: string
}

const initialContext: Record<string, ImageContextType> = {}
export const ImageContext = createContext(initialContext)

export const ImagePlaceholderContext = () => {
  return useContext(ImageContext)
}

export const useImagePlaceholder = (image: string) => {
  return useContext(ImageContext)[image]
}
