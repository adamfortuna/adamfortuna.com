/* eslint-disable react/no-danger */
import React from 'react'
import { Article } from '@/types'
import { MarkdownParser } from '@/components/markdown/MarkdownParser'

export interface ArticleContentProps {
  article: Article
}

export const ArticleContent = ({ article }: ArticleContentProps) => {
  return (
    <article className="prose mx-auto">
      <MarkdownParser content={article.content} />
    </article>
  )
}
