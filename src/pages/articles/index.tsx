import { NextPage } from 'next'
import { Container } from '@/components/layout/Container'
import { ArticleLink } from '@/components/articles/ArticleLink'
import { getArticles } from '@/lib/notion'
import ArticleType from '@/types/ArticleType'

export interface ArticleProps {
  articles: ArticleType[]
}

const ArticlesPage: NextPage<ArticleProps> = ({ articles }) => {
  return (
    <main className="mt-[80px] md:mt-[100px]">
      <Container className="my-8 max-w-2xl">
        <h1 className="font-black text-3xl text-black">Articles</h1>
        <p>
          Here's everything I've ever written.
        </p>

        <div className="mt-8">
          {articles.map((article) => (
            <ArticleLink article={article} key={article.slug} />
          ))}
        </div>
      </Container>
    </main>
  )
}

export default ArticlesPage

export async function getStaticProps() {
  const articles = await getArticles()

  return {
    props: { articles },
    revalidate: 60 * 60,
  }
}
