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
      {article.content ? <MarkdownParser content={article.content} /> : <p>This article has no content.</p>}
    </article>
  )
}
