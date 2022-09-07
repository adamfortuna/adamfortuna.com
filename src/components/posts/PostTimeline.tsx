/* eslint-disable no-nested-ternary */
import clsx from 'clsx'

import { extractPath } from '@/lib/extractPath'
import { Post } from '@/lib/graphql/output'
import { ProjectIcon } from '@/components/projects/ProjectIcon'
import { TechnologyTags } from '@/components/technologies/TechnologyTags'
import { Link } from '../layout/Link'

const PostTimelineIcon = ({ post }: { post: Post }) => {
  return (
    <span
      className={clsx(
        'drop-shadow-xl flex absolute justify-center items-center rounded-full bg-white ring-4 ring-gray-400',
        post.size === 'lg' ? '-left-8 w-16 h-16' : '',
        post.size === 'md' ? '-left-6 w-12 h-12' : '',
        post.size === 'sm' ? '-left-4 w-8 h-8' : '',
      )}
    >
      <ProjectIcon
        icon={post.project?.data?.attributes?.icon}
        size={post.size === 'lg' ? 64 : post.size === 'md' ? 48 : 32}
      />
    </span>
  )
}

const postSize = {
  lg: 16,
  md: 12,
  sm: 8,
}
export const PostTimeline = ({ post }: { post: Post }) => {
  const date = new Date(post.date_published).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <li className={`mb-${postSize[post.size]} ml-8`}>
      <PostTimelineIcon post={post} />
      <div className="ml-4 flex flex-col">
        <p className="leading-7">
          <Link href={post.canonical_url ? post.canonical_url : `/articles/${post.slug}`} variant="header" size="lg">
            <span className={`${post.size === 'lg' ? 'text-2xl' : post.size === 'md' ? 'text-xl' : 'text-lg'}`}>
              {post.title}
            </span>
          </Link>
        </p>
        <div className="block mt-1 mb-2 text-sm font-normal leading-none text-gray-500">
          <ul className="list-comma">
            <li>{date}</li>
            {post.canonical_url && <li>{extractPath(post.canonical_url)}</li>}
          </ul>
        </div>
        {post.size === 'lg' && <p className="mb-2 text-base font-normal text-gray-600">{post.excerpt}</p>}
        {(post.size === 'lg' || post.size === 'md') && (
          <TechnologyTags technologies={post.technologies?.data || []} size="xs" />
        )}
      </div>
    </li>
  )
}
