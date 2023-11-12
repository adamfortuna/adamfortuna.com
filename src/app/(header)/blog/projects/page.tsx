import Link from 'next/link'
import Projects from '@/components/articles/sidebar/Projects'
import BlogAboutCallout from '@/components/articles/BlogAboutCallout'

export const revalidate = 3600

export default async function BlogProjectsPage() {
  return (
    <>
      <p className="font-handwriting text-3xl md:text-4xl lg:text-6xl text-blue-700 mb-2 flex flex-wrap items-baseline">
        <span>
          <Link href="/blog" className="underline hover:no-underline">
            Blog
          </Link>
        </span>
        <span className="text-2xl mx-2">/</span>
        <span>Projects</span>
      </p>
      <BlogAboutCallout />

      <div className="pt-12" />
      <Projects />
    </>
  )
}
