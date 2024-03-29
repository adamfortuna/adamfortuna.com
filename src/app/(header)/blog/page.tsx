import { ArticlesList } from '@/components/articles/ArticlesList'
import BlogAboutCallout from '@/components/articles/BlogAboutCallout'
import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'

const PER_PAGE = Number(process.env.NEXT_PUBLIC_ARTICLES_PER_PAGE)
export const dynamic = 'force-static'
export const revalidate = 3600

export const metadata = {
  title: 'Blog - Adam Fortuna',
  description: "Every blog post I've written across a few different sites",
}

export default async function BlogPage() {
  const { articles, totalPages } = await getRecentPosts({ count: PER_PAGE, projects: ['adamfortuna'] })

  return (
    <>
      <h1 className="font-handwriting text-6xl text-blue-700 mb-2">Blog</h1>
      <BlogAboutCallout />
      <ArticlesList articles={articles} url="/blog/projects/adamfortuna" page={1} totalPages={totalPages} />
    </>
  )
}
