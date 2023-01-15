import { ArticlesList } from '@/components/articles/ArticlesList'
import BlogAboutCallout from '@/components/articles/BlogAboutCallout'
import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'

export const revalidate = 60 * 60 // 60 minutes
export default async function BlogPage() {
  const articles = await getRecentPosts({ count: 1000, projects: ['adamfortuna'] })

  return (
    <>
      <h1 className="font-handwriting text-6xl text-blue-700 mb-2">Blog</h1>
      <BlogAboutCallout />
      <ArticlesList articles={articles} />
    </>
  )
}