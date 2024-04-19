/* eslint-disable react/no-danger */

import { Page, Post } from '@/types'

export const ArticleContentHtml = ({ article }: { article: Page | Post }) => {
  return (
    <div
      className="e-content prose dark:prose-invert mx-auto"
      dangerouslySetInnerHTML={{ __html: article.content || '' }}
    />
  )
}
