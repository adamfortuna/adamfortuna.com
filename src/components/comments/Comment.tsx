import { Comment as CommentType } from '@/types'
import { Webmention } from './types/Webmention'

export const Comment = ({ comment }: { comment: CommentType }) => {
  if (comment.type === 'mention' || comment.type === 'comment') {
    return <Webmention comment={comment} />
  }
  return <></>
}
export default Comment
