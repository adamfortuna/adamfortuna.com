import Featuring from './Featuring'
import Tags from './Tags'
import Projects from './Projects'

const ArticleSidebar = () => (
  <div className="mt-12 md:mt-0 col-span-12 md:col-span-3 xl:col-span-2 space-y-8 max-w-[300px] order-last md:order-first p-2 md:p-0">
    <Featuring />
    <Projects />
    <Tags />
  </div>
)

export default ArticleSidebar
