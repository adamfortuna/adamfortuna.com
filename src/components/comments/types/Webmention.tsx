/* eslint-disable @next/next/no-img-element, react/no-danger */
import { Comment as CommentType } from '@/types'
import clsx from 'clsx'
import { stripHtml } from 'string-strip-html'
import { dateFullLong } from '@/lib/dateService'

export const Webmention = ({ comment }: { comment: CommentType }) => {
  const commentContent = stripHtml(comment.content).result
  const content = commentContent.length > 280 ? `${commentContent.substring(0, 280)}...` : commentContent
  return (
    <div
      id={`comment-${comment.id}`}
      className={clsx(
        'bg-white relative md:max-w-6xl mx-auto',
        comment.root ? 'shadow-lg lg:rounded-lg py-4 px-2 my-2 md:my-6 md:p-6' : 'my-2 pb-0 ml-4 md:ml-8',
      )}
    >
      <div className="mx-auto px-3 md:max-w-3xl md:px-0 flex items-center">
        <img
          loading="lazy"
          width={64}
          height={64}
          className="rounded-lg w-12 h-12"
          src={comment.author.avatar.url}
          alt={comment.author.name}
        />

        <div className="flex-1 ml-6">
          <p className="text-base md:text-lg md:mb-2 leading-5">
            {comment.author.url ? (
              <a
                href={comment.author.url}
                className="link--blue whitespace-wrap"
                rel="noopener nofollow noreferrer"
                target="_blank"
              >
                {comment.author.name}
              </a>
            ) : (
              <>{comment.author.name}</>
            )}{' '}
            mentioned this article on{' '}
            <a
              href={`#comment-${comment.id}`}
              className="block md:inline text-gray-700 hover:underline text-sm md:text-base"
            >
              #{dateFullLong(comment.date)}.
            </a>
          </p>
        </div>
      </div>

      <div className="prose dark:prose-invert">
        <blockquote style={{ marginTop: '10px', paddingTop: '10px' }}>
          {content}
          <cite className="mt-2 text-base" style={{ width: '100%' }}>
            Read more at{' '}
            <a href={comment.webmention.source_url} target="_blank" rel="nofollow noopener noreferrer">
              {comment.webmention.source_url.replace(/https?:\/\//, '')}
            </a>
          </cite>
        </blockquote>
      </div>
    </div>
  )
}
