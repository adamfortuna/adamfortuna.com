import { Post } from '@/lib/graphql/output'
import { Container } from '@/components/layout/Container'
import { Link } from '@/components/layout/Link'
import { PostCard } from './PostCard'

export interface ProjectCardsProps {
  posts: Post[]
  className?: string
  children: any
}

export const PostCards = ({ posts, className, children }: ProjectCardsProps) => {
  return (
    <div className={`${className}`}>
      <Container className="">
        {children}

        <div className="mx-auto space-y-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <p className="mt-8 border-t border-sky-200 text-center py-12">
          <Link href="/articles">See all Articles</Link>
        </p>
      </Container>
    </div>
  )
}
