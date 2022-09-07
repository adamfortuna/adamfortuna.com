/* eslint-disable react/no-danger */
import React from 'react'
import { Post } from '@/lib/graphql/output'
import { PostParser } from '@/components/posts/PostParser'

export interface PostContentProps {
  post: Post
}

export const PostContent = ({ post }: PostContentProps) => {
  return (
    <article className="prose mx-auto">
      <PostParser html={post.content as string} />
    </article>
  )
}
