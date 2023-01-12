import { Container } from '@/components/layout/Container'
import ArticleSidebar from '@/components/articles/sidebar'
import { getRecentPosts } from '@/queries/wordpress/getRecentPosts'
import { ArticlesList } from '@/components/articles/ArticlesList'
import BlogAboutCallout from '@/components/articles/BlogAboutCallout'

export const revalidate = 60 * 60 // 60 minutes
export default async function BlogPage() {
  const articles = await getRecentPosts({ count: 1000, projects: ['adamfortuna'] })

  return (
    <Container className="grid grid-cols-12 mx-auto md:space-x-4">
      <ArticleSidebar />

      <div className="col-span-12 md:col-span-9 xl:col-span-10 p-2 md:p-0">
        <h1 className="font-handwriting text-6xl text-blue-700 mb-2">Blog</h1>
        <BlogAboutCallout />
        <ArticlesList articles={articles} />
      </div>
    </Container>
  )
}
