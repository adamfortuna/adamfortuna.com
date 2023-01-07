/* eslint-disable react/no-danger */
import React from 'react'
import { Article } from '@/types'
import { MarkdownParser } from '@/components/markdown/MarkdownParser'

export interface ArticleContentProps {
  article: Article
}

export const ArticleContent = ({ article }: ArticleContentProps) => {
  return (
    <article className="prose dark:prose-invert mx-auto">
      {article.content ? <MarkdownParser content={article.content} /> : <p>This article has no content.</p>}
    </article>
  )
}

export const ArticleContentHtml = ({ article }: ArticleContentProps) => {
  return (
    <article
      className="prose dark:prose-invert mx-auto container"
      dangerouslySetInnerHTML={{ __html: article.content || '' }}
    />
  )
}
