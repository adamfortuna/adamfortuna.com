import Link from 'next/link'
import { Tag as TagType } from '@/types'

const Tag = ({ tag, className }: { tag: TagType; className: string }) => (
  <Link href={`/blog/tags/${tag.slug}`} className={`${className} text-sm mr-2 p-category`}>
    #{tag.name}
  </Link>
)

const Tags = ({ tags, className = 'link--blue' }: { tags: TagType[]; className?: string }) => (
  <div className="max-w-3xl flex flex-wrap mx-auto">
    {tags.map((tag) => (
      <Tag key={tag.slug} tag={tag} className={className} />
    ))}
  </div>
)

export default Tags
