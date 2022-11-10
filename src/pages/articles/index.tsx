import { NextPage } from 'next'
import sortBy from 'lodash/sortBy'
import { useMemo } from 'react'

import { Container } from '@/components/layout/Container'
import { ArticleTimeline } from '@/components/articles/ArticleTimeline'
import { getArticles } from '@/lib/fileService'
import { dateFormatLong } from '@/lib/dateService'
import { Article } from '@/types'

export interface ArticleProps {
  articles: Article[]
  articlesCount: Number
  firstArticleDate: string
}

const ArticlesPage: NextPage<ArticleProps> = ({ articles, articlesCount, firstArticleDate }) => {
  const firstDate = useMemo(() => dateFormatLong(firstArticleDate), [firstArticleDate])
  return (
    <main className="mt-[80px] md:mt-[100px]">
      <Container className="my-8 max-w-2xl">
        <h1 className="font-black text-3xl dark:text-white">Articles</h1>
        <p className="dark:text-white">
          <b>{articlesCount.toLocaleString()}</b> articles written since <b>{firstDate}</b>{' '}
          <span className="text-gray-700 dark:text-gray-300 text-sm">({articles.length.toLocaleString()} public)</span>.
        </p>

        <div className="mt-8">
          <ArticleTimeline articles={articles} />
        </div>
      </Container>
    </main>
  )
}

export default ArticlesPage

export async function getStaticProps() {
  const articles = await getArticles()
  const dated = articles.filter((a) => a.date)
  const sorted = sortBy(dated, 'date').reverse()
  const hrefed = sorted.filter((a) => a.href)
  const light = hrefed.map((a) => {
    return {
      title: a.title,
      slug: a.slug,
      tags: a.tags,
      href: a.href,
      date: a.date,
      project: a.project,
    }
  })

  return {
    props: {
      articles: light,
      articlesCount: articles.length,
      firstArticleDate: sorted[sorted.length - 1].date,
    },
  }
}
