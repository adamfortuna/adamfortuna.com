/* eslint-disable react/no-danger */
import { GetStaticPropsContext, NextPage } from 'next'

import { Container } from '@/components/layout/Container'
import { ArticleContent } from '@/components/articles/ArticleContent'
import { Tags } from '@/components/tags/Tags'
import { getArticles, getArticleBySlug } from '@/lib/fileService'
import { dateFormatLong } from '@/lib/dateService'
import { Article } from '@/types'

export interface ArticleProps {
  article: Article
}

const ArticlePage: NextPage<ArticleProps> = ({ article }) => {
  return (
    <div className="mt-[100px]">
      <Container>
        <div className="max-w-2xl mx-auto dark:text-white">
          <h1 className="text-center font-bold text-4xl mb-4">{article.title}</h1>
          <p className="text-center items-center flex flex-col gap-2">
            <span>
              Published {dateFormatLong(article.date)} on {article.project}
            </span>
            <Tags tags={article.tags} />
          </p>
          <ArticleContent article={article} />
        </div>
      </Container>
    </div>
  )
}

export default ArticlePage

export async function getStaticPaths() {
  const articles = await getArticles()
  const withSlug = articles.filter((a) => a.slug)

  return {
    paths: withSlug.map((article) => {
      return {
        params: {
          slug: article.slug,
        },
      }
    }),
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.slug as string
  const article = await getArticleBySlug(slug)

  return {
    props: { article },
  }
}
