/* eslint-disable react/no-danger */

import { PhotoPost } from '@/types'

export const ArticleContentHtml = ({ article }: { article: PhotoPost }) => {
  return (
    <div
      className="e-content prose dark:prose-invert mx-auto"
      dangerouslySetInnerHTML={{ __html: article.content || '' }}
    />
  )
}
