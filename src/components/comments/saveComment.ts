'use server'

import { createComment } from '@/queries/wordpress/createComment'
import { revalidatePath } from 'next/cache'
import { FormInput } from './CommentForm'

interface Params {
  commentData: FormInput
  slug: string
  articleId: number
  parent: number | null
}
export async function saveComment({ commentData, slug, articleId, parent }: Params) {
  // Create this comment
  const result = await createComment({
    name: commentData.name,
    commentOn: articleId,
    email: commentData.email,
    url: commentData.website,
    content: commentData.content,
    parent,
  })

  // Call revalidate on this page
  revalidatePath(`/${slug}`)

  // Return the comment ID
  return result
}
