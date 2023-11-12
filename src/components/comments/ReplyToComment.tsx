'use client'

import { Article, Comment as CommentType } from '@/types'
import { useState } from 'react'
import CommentForm from './CommentForm'

const ReplyToComment = ({ article, comment }: { article: Article; comment: CommentType }) => {
  const [replying, setReplying] = useState(false)

  return (
    <div>
      <ul className="list-bar list-inline">
        <li>
          <button type="button" className="link--blue" onClick={() => setReplying(!replying)}>
            {replying ? 'Cancel' : 'Reply'}
          </button>
        </li>
      </ul>

      {replying ? <CommentForm article={article} parentComment={comment} onClose={() => setReplying(false)} /> : false}
    </div>
  )
}

export default ReplyToComment
