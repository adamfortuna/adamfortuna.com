'use client'

import { useState } from 'react'
import { Article } from '@/types'
import CommentForm from './CommentForm'

const CommentReply = ({ article }: { article: Article }) => {
  const [expanded, setExpanded] = useState(false)

  if (!article.allowComments) {
    return false
  }

  return (
    <>
      {expanded === false ? (
        <div className="mt-8 mx-auto max-w-3xl flex flex-col items-center">
          <button type="button" className="button" onClick={() => setExpanded(true)}>
            Comment to join the conversation
          </button>
        </div>
      ) : (
        <CommentForm article={article} onClose={() => setExpanded(false)} />
      )}
    </>
  )
}
export default CommentReply
