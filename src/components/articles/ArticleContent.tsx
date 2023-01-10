/* eslint-disable react/no-danger, jsx-a11y/no-noninteractive-element-interactions */
import { KeyboardEvent, MouseEvent } from 'react'
import { Article } from '@/types'
import { MarkdownParser } from '@/components/markdown/MarkdownParser'
import { useRouter } from 'next/router'

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
  const router = useRouter()

  // Capture links on this blog and use the router instead of a full page reload
  const articleClicked = async (e: MouseEvent | KeyboardEvent) => {
    const { href } = e.target as HTMLAnchorElement
    if (!href) {
      return
    }
    if (href.charAt(0) === '/' || href.indexOf(process.env.NEXT_PUBLIC_VERCEL_URL as string) === 0) {
      e.preventDefault()
      await router.push(href)
    }
  }

  return (
    <article
      className="prose dark:prose-invert mx-auto container"
      dangerouslySetInnerHTML={{ __html: article.content || '' }}
      onClick={articleClicked}
      onKeyUp={articleClicked}
    />
  )
}
