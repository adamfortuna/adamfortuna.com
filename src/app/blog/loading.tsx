import BlogAboutCallout from '@/components/articles/BlogAboutCallout'

export default async function Loading() {
  return (
    <>
      <h1 className="font-handwriting text-6xl text-blue-700 mb-2">Blog</h1>
      <BlogAboutCallout />

      <h1 className="mt-12 font-handwriting text-4xl text-blue-700 mb-2">Loading...</h1>
      <p>Just a sec, let me get things ready.</p>
    </>
  )
}
