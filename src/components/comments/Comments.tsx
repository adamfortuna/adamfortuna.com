import pluralize from '@/lib/pluralize'
import { Article } from '@/types'
import { Comment } from './Comment'
import { WebmentionSummary } from './WebmentionSummary'

export const Comments = ({ article }: { article: Article }) => {
  if (!article.comments || article.comments.length === 0) {
    return <></>
  }
  return (
    <div className="pt-4" id="comments">
      <div className="mx-auto">
        {article.commentCount > 0 && (
          <div>
            <div className="mx-auto px-3 md:max-w-3xl md:px-0 flex justify-between flex-row items-baseline">
              <h2 className="font-handwriting text-4xl text-blue-700 mb-2">
                <span className="text-5xl">{article.commentCount}</span> {pluralize('Webmention', article.commentCount)}
              </h2>
              <a
                href="https://indieweb.org/Webmention"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline text-gray-700 text-sm hidden md:inline-block"
              >
                What's a webmention?
              </a>
            </div>
            <p className="mx-auto px-3 md:max-w-3xl md:px-0">
              Did you link to this article?{' '}
              <a
                href="https://wp.adamfortuna.com/wp-json/webmention/1.0/endpoint"
                target="_blank"
                rel="nofollow noreferrer"
                className="underline hover:no-underline"
              >
                Add it here
              </a>
              <span className="hidden md:inline"> and I'll include it</span>!
            </p>

            <WebmentionSummary comments={article.comments} />
            <div className="space-y-12 my-8">
              {article.comments.map((comment) => (
                <Comment comment={comment} key={`comment-${comment.id}`} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
