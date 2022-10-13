/* eslint-disable react/no-danger */
import { GetStaticPropsContext, NextPage } from 'next'

import { getArticleBySlug } from '@/lib/notion'
import { Container } from '@/components/layout/Container'
import { ArticleContent } from '@/components/articles/ArticleContent'
import ArticleType from '@/types/ArticleType'

export interface ArticleProps {
  article: ArticleType
}

const ArticlePage: NextPage<ArticleProps> = ({ article }) => {
  console.log("article", article)
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
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = (params?.slug as string),
        article = await getArticleBySlug(slug)

  return {
    props: { article },
    revalidate: 60 * 60
  } 
}
