import { ArticleContentHtml } from '@/components/articles/ArticleContent'
import { ArticleHeader } from '@/components/articles/ArticleHeader'
import { ArticleAboutAdamFooter } from '@/components/articles/ArticleAboutAdamFooter'
import { Comments } from '@/components/comments/Comments'
import { Page, Post } from '@/types'
import { BackToTop } from './BackToTop'

export interface ArticleHeaderProps {
  article: Page | Post
}

export const Article = ({ article }: ArticleHeaderProps) => {
  return (
    <article className="h-entry">
      <ArticleHeader article={article} />
      <ArticleContentHtml article={article} />
      <ArticleAboutAdamFooter />
      <Comments article={article} />
      <BackToTop />
    </article>
  )
}
