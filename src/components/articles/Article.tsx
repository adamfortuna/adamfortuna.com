import { ArticleContentHtml } from '@/components/articles/ArticleContent'
import { ArticleHeader } from '@/components/articles/ArticleHeader'
import { ArticleAboutAdamFooter } from '@/components/articles/ArticleAboutAdamFooter'
import { ReplyViaEmail } from '@/components/articles/ReplyViaEmail'
import { Comments } from '@/components/comments/Comments'
import { Page, Post } from '@/types'
import Cloud from '@/images/cloud.svg'

export interface ArticleHeaderProps {
  article: Page | Post
}

export const Article = ({ article }: ArticleHeaderProps) => {
  return (
    <article className="h-entry">
      <ArticleHeader article={article} />
      <ArticleContentHtml article={article} />
      <ArticleAboutAdamFooter />
      <div className="bg-sky-100 mt-4 md:pt-4 pb-8">
        <div className="h-16 md:h-24 lg:h-32 overflow-hidden md:-mt-[40px] relative  rotate-180">
          <Cloud className="w-full xl:bg-cover relative" />
          <div className="md:hidden bg-white absolute bottom-0 h-8 md:h-2 w-full" />
        </div>

        <Comments article={article} />
        <ReplyViaEmail />
      </div>
    </article>
  )
}
