import pluralize from '@/lib/pluralize'
import { Article } from '@/types'
import CommentReply from './CommentReply'
import { Comment } from './Comment'

export const ArticleComments = ({ article }: { article: Article }) => {
  return (
    <div className="" id="comments">
      <div className="md:max-w-4xl mx-auto">
        {article.commentCount > 0 && (
          <div>
            <h2 className="text-3xl">
              {article.commentCount} {pluralize('Comment', article.commentCount)}
            </h2>

            <div>
              {article.comments.map((comment) => (
                <Comment comment={comment} key={`comment-${comment.id}`} />
              ))}
            </div>
          </div>
        )}

        {article.allowComments && <CommentReply article={article} />}
      </div>
    </div>
  )
}

export default ArticleComments
