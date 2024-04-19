import { PhotoPost } from '@/types'
import Pagination from '@/components/layout/Pagination'
import PhotoCard from './PhotoCard'

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
        <PhotoCard key={article.slug} article={article} />
      ))}

      {page && totalPages && <Pagination page={page} totalPages={totalPages} url={url} />}
    </div>
  )
}

export default PhotosList
