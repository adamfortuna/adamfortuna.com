/* eslint-disable @next/next/no-img-element */

'use client'

import { Comment as CommentType } from '@/types'
import { extractFediverseName } from '@/lib/stringService'

import { Tooltip } from 'react-tooltip'

export const WebmentionAvatar = ({ comment }: { comment: CommentType }) => {
  const id = `comment-avatar-${comment.id}`
  const username = extractFediverseName(comment.author.url || '', comment.author.name)

  if (comment.author.url) {
    return (
      <>
        <Tooltip anchorId={id} place="top" />
        <a
          href={comment.author.url}
          target="_blank"
          className="group"
          rel="noreferrer"
          data-tooltip-content={username}
          id={id}
        >
          <img
            src={comment.author.avatar.url}
            loading="lazy"
            width={64}
            height={64}
            className="rounded-full w-12 h-12 ring-4 ring-transparent group-hover:ring-blue-500"
            alt={comment.author.name}
          />
        </a>
      </>
    )
  }
  return (
    <>
      <Tooltip anchorId={id} place="top" />
      <img
        src={comment.author.avatar.url}
        loading="lazy"
        width={64}
        height={64}
        className="rounded-full w-12 h-12"
        alt={username}
        data-tooltip-content={username}
        id={id}
      />
    </>
  )
}
