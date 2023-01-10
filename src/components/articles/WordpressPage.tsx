import { Article } from '@/types'
import { ArticleContentHtml } from '@/components/articles/ArticleContent'
import { ArticleHeader } from '@/components/articles/ArticleHeader'

interface Props {
  article: Article
}

const WordpressPage = ({ article }: Props) => {
  return (
    <div className="mx-auto w-full justify-center">
      <div className="lg:mx-auto flex-1 lg:flex-none justify-center">
        <ArticleHeader article={article} />
        <ArticleContentHtml article={article} />
      </div>
    </div>
  )
}

export default WordpressPage