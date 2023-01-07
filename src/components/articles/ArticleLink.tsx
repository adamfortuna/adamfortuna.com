import { useMemo } from 'react'

import { dateFormatLong } from '@/lib/dateService'
import { Link } from '@/components/layout/Link'
import { Article } from '@/types'
import ArticleProjectIcon from './ArticleProjectIcon'

export interface ArticleLinkProps {
  article: Article
}

export const ArticleLink = ({ article }: ArticleLinkProps) => {
  const publishDate = useMemo(() => dateFormatLong(article.date), [article.date])

  return (
    <div className="my-2 flex justify-between">
      <div className="flex flex-row items-center space-x-4">
        <ArticleProjectIcon categories={article.categories} />
        <Link href={`/${article.slug}`} className="text-lg link--blue font-semibold">
          {article.title}
        </Link>
      </div>
      <p className="hidden md:block text-blue-500 text-sm w-[140px] text-right">{publishDate}</p>
    </div>
  )
}
