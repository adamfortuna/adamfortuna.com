import { Post } from '@/lib/graphql/output'
import { Link } from '@/components/layout/Link'

export interface PostCardProps {
  post: Post
  className?: string
}

export const PostCard = ({ className = '', post }: PostCardProps) => {
  return (
    <div className={className}>
      <Link href={`/articles/${post.slug}`}>{post.title}</Link>
    </div>
  )
}
