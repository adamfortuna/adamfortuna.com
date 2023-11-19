import { ArticleContentHtml } from '@/components/articles/ArticleContent'
import { PhotoArticleHeader } from '@/components/photos/PhotoArticleHeader'
import { ArticleAboutAdamFooter } from '@/components/marketing/ArticleAboutAdamFooter'
import { Comments } from '@/components/comments/Comments'
import { PhotoPost } from '@/types'
import { PageFooter } from '../layout/PageFooter'

export interface PhotoArticleHeaderProps {
  article: PhotoPost
}

export const PhotoArticle = ({ article }: PhotoArticleHeaderProps) => {
  return (
    <article className="h-entry">
      <PhotoArticleHeader article={article} />
      <ArticleContentHtml article={article} />
      <PageFooter>
        <>
          <ArticleAboutAdamFooter />
          <Comments article={article} />
        </>
      </PageFooter>
    </article>
  )
}
