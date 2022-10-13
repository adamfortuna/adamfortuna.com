/* eslint-disable react/no-danger */
import React from 'react'
import ArticleType from '@/types/ArticleType'
import { MarkdownParser } from '@/components/markdown/MarkdownParser'

export interface ArticleContentProps {
  article: ArticleType
}

export const ArticleContent = ({ article }: ArticleContentProps) => {
  return (
    <article className="prose mx-auto">
      <MarkdownParser markdown={article.content} />
    </article>
  )
}
