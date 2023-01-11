import Link from 'next/link'
import { Tag as TagType } from '@/types'

const Tag = ({ tag }: { tag: TagType }) => (
  <Link href={`/blog/tags/${tag.slug}`} className="link--blue text-sm mr-2">
    #{tag.name}
  </Link>
)

const Tags = ({ tags }: { tags: TagType[] }) => (
  <div className="max-w-3xl flex flex-wrap sm:justify-center mx-auto">
    {tags.map((tag) => (
      <Tag key={tag.slug} tag={tag} />
    ))}
  </div>
)

export default Tags
