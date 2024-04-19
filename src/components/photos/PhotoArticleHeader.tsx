/* eslint-disable @next/next/no-img-element, @typescript-eslint/no-unnecessary-condition */
import { PhotoPost } from '@/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown } from '@fortawesome/pro-solid-svg-icons'

export interface PhotoArticleHeaderProps {
  article: PhotoPost
}

export const PhotoArticleHeader = ({ article }: PhotoArticleHeaderProps) => {
  return (
    <div className="mb-6">
      <div className="relative h-screen flex flex-col place-content-end content-wrapper">
        <div className="absolute w-full h-full inset-0 bg-grey-800">
          {article.featuredImage?.sourceUrl ? (
            <img
              className="absolute inset-0 w-full h-full object-cover bg-center"
              alt={`${article.title} title`}
              src={article.featuredImage.sourceUrl}
            />
          ) : (
            false
          )}
        </div>
        <div className="flex items-center z-10 flex-col text-white mb-8">
          <a href="#content">
            <FontAwesomeIcon
              icon={faCircleArrowDown}
              size="lg"
              className="bg-black/40 rounded-full text-white w-12 h-12 hover:text-gray-100 hover:shadow-md"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
