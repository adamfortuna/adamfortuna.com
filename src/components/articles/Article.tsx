import { ArticleContentHtml } from '@/components/articles/ArticleContent'
import { ArticleHeader } from '@/components/articles/ArticleHeader'
import { ArticleAboutAdamFooter } from '@/components/articles/ArticleAboutAdamFooter'
import { ReplyViaEmail } from '@/components/articles/ReplyViaEmail'
import { Page, Post } from '@/types'

export interface ArticleHeaderProps {
  article: Page | Post
}

export const Article = ({ article }: ArticleHeaderProps) => {
  return (
    <article className="h-entry">
      <ArticleHeader article={article} />
      <ArticleContentHtml article={article} />
      <ArticleAboutAdamFooter />
      <ReplyViaEmail />
    </article>
  )
}
