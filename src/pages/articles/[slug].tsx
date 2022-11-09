/* eslint-disable react/no-danger */
import { GetStaticPropsContext, NextPage } from 'next'

import { Container } from '@/components/layout/Container'
import { ArticleContent } from '@/components/articles/ArticleContent'
import { getArticles, getArticleBySlug } from '@/lib/fileService'
import { Article } from '@/types'

export interface ArticleProps {
  article: Article
}

const ArticlePage: NextPage<ArticleProps> = ({ article }) => {
  return (
    <div className="mt-[100px]">
      <Container className="">
        <h1 className="text-center font-serif font-bold text-4xl mb-4">{article.title}</h1>
        <ArticleContent article={article} />
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
