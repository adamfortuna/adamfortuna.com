'use client'

import { useState } from 'react'
import { Article } from '@/types'

const CommentReply = ({ article }: { article: Article }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="hidden">
      {expanded === false ? (
        <button
          type="button"
          className="first-letter:
          border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white
          rounded py-2 px-4 flex items-center no-underline font-bold
          border bg-white self-center"
          onClick={() => setExpanded(true)}
        >
          Comment to join the conversation
        </button>
      ) : (
        <div>REPLY FORM for {article.title}</div>
      )}
    </div>
  )
}
export default CommentReply
