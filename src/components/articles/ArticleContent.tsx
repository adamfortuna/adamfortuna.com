/* eslint-disable react/no-danger */

import { Article } from '@/types'

export const ArticleContentHtml = ({ article }: { article: Article }) => {
  return (
    <article
      className="prose dark:prose-invert mx-auto container"
      dangerouslySetInnerHTML={{ __html: article.content || '' }}
    />
  )
}
