/* eslint-disable react/jsx-no-useless-fragment */
import { Post } from '@/lib/graphql/output'

export interface Props {
  currentPost: Post
  previousPost: Post | null
}
export const PostTimelineSeparator = ({ currentPost, previousPost }: Props) => {
  const currentPostDate = new Date(currentPost.date_published)
  const currentPostYear = currentPostDate.getFullYear()

  const previousPostDate = previousPost ? new Date(previousPost.date_published) : null
  const previousPostYear = previousPostDate ? previousPostDate.getFullYear() : null

  if (currentPostYear !== previousPostYear) {
    return (
      <li className="mt-24 lg:mt-0 mb-4 relative ml-12 lg:ml-0">
        <span className="md:ml-0 lg:absolute lg:-left-[150px] w-24 h-24 text-black font-black text-2xl lg:text-right">
          {currentPostYear}

          <span className="text-sm font-semibold text-gray-400 block">
            {currentPostDate.toLocaleString('en-US', { month: 'long' })}
          </span>
        </span>
      </li>
    )
  }
  if (currentPostDate.getMonth() !== previousPostDate?.getMonth()) {
    return (
      <li className="mt-24 lg:mt-0 mb-4 relative ml-12 lg:ml-0">
        <span className="md:ml-0 lg:absolute lg:-left-[150px] w-24 h-24 text-black font-black text-2xl lg:text-right">
          <span className="text-sm font-semibold text-gray-400 block">
            {currentPostDate.toLocaleString('en-US', { month: 'long' })}
          </span>
        </span>
      </li>
    )
  }
  return <></>
}
