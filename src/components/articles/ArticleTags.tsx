import { useMemo } from 'react'
import { Tags } from '@/components/tags/Tags'
import { Article } from '@/types'

interface ArticleTagProps {
  article: Article
}
export const ArticleTags = ({ article }: ArticleTagProps) => {
  const tags = useMemo(() => {
    return article.tags.sort()
  }, [article.tags])

  if (tags.length === 0) {
    return <></>
  }

  return (
    <div className="ml-12 md:ml-0 mt-12 relative space-y-16">
      <Tags tags={tags} />
    </div>
  )
}
