import { ArticleContentHtml } from '@/components/articles/ArticleContent'
import { ArticleHeader } from '@/components/articles/ArticleHeader'
import { ArticleAboutAdamFooter } from '@/components/marketing/ArticleAboutAdamFooter'
import { Comments } from '@/components/comments/Comments'
import { PageFooter } from '@/components/layout/PageFooter'
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
      <PageFooter>
        <>
          <ArticleAboutAdamFooter />
          <Comments article={article} />
          <BackToTop />
        </>
      </PageFooter>
    </article>
  )
}
