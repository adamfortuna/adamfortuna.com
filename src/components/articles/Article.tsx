import { AboutHeader } from '@/components/articles/AboutHeader'
import { ArticleContentHtml } from '@/components/articles/ArticleContent'
import { ArticleHeader } from '@/components/articles/ArticleHeader'
import { ArticleAboutAdamFooter } from '@/components/articles/ArticleAboutAdamFooter'
import { Comments } from '@/components/comments/Comments'
import { Page, Post } from '@/types'

export interface ArticleHeaderProps {
  article: Page | Post
}

const ABOUT_SLUGS = ['about', 'goals', 'beliefs', 'now']

export const Article = ({ article }: ArticleHeaderProps) => {
  const useAbout = ABOUT_SLUGS.indexOf(article.slug) !== -1

  return (
    <article className="h-entry">
      {useAbout && <AboutHeader article={article} />}
      <ArticleHeader article={article} />
      <ArticleContentHtml article={article} />
      <ArticleAboutAdamFooter />
      <Comments article={article} />
    </article>
  )
}
