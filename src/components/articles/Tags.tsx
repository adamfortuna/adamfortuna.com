import Link from 'next/link'
import { Tag as TagType } from '@/types'

const Tag = ({ tag }: { tag: TagType }) => (
  <Link href={`/blog/tags/${tag.slug}`} passHref>
    <a>#{tag.name}</a>
  </Link>
)

const Tags = ({ tags }: { tags: TagType[] }) => (
  <ul className="max-w-3xl space-x-2 list-comma">
    {tags.map((tag) => (
      <Tag key={tag.slug} tag={tag} />
    ))}
  </ul>
)

export default Tags
