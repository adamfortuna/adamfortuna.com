/* eslint-disable @next/next/no-img-element */
import { dateFormatLong } from '@/lib/dateService'
import { PhotoPost } from '@/types'
import Link from 'next/link'

const PhotoCard = ({ article }: { article: PhotoPost }) => {
  const publishDate = dateFormatLong(article.date)
  return (
    <div
      className="group bg-gray-50 rounded shadow-md hover:shadow-xl mb-8 bg-cover border-lg"
      style={{
        backgroundImage: `url(${article.featuredImage?.sourceUrl})`,
      }}
    >
      <Link href={`/photos/${article.slug}`}>
        <div className="relative">
          <img src={article.featuredImage?.sourceUrl} alt={article.title} width={800} height={500} />
          <div className="bg-white/10 group-hover:bg-white/20 group-hover:backdrop-blur-xs transition-all duration-300 h-full w-full absolute top-0 left-0" />
        </div>

        <div className="p-4 backdrop-blur-lg bg-white/50 group-hover:backdrop-blur-xl transition-all duration-300">
          <p className="font-serif text-4xl font-bold">{article.title}</p>
          <p>{article.excerpt}</p>
          <p>{publishDate}</p>
        </div>
      </Link>
    </div>
  )
}

export default PhotoCard
