import { PhotoPost } from '@/types'
import Pagination from '@/components/layout/Pagination'

export interface ArticleTimelineProps {
  articles: PhotoPost[]
  page?: number
  totalPages?: number
  url: string
}

const PhotosList = ({ articles, page, totalPages, url }: ArticleTimelineProps) => {
  return (
    <div>
      {articles.map((article) => (
        <div>{article.title}</div>
      ))}

      {page && totalPages && <Pagination page={page} totalPages={totalPages} url={url} />}
    </div>
  )
}

export default PhotosList
