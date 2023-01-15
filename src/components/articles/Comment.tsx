/* eslint-disable @next/next/no-img-element, react/no-danger */
import Link from 'next/link'
import { Comment as CommentType } from '@/types'
import clsx from 'clsx'
import { dateFullLong } from '@/lib/dateService'

export const Comment = ({ comment }: { comment: CommentType }) => {
  return (
    <div
      id={`comment-${comment.id}`}
      className={clsx(
        'bg-white relative overflow-scroll',
        comment.root ? 'shadow-lg rounded-lg py-4 px-2 my-2 md:my-6 md:p-6' : 'my-2 pb-0 ml-4 md:ml-8',
      )}
    >
      <div className="flex">
        <img
          loading="lazy"
          width={64}
          height={64}
          className="rounded-lg w-16 h-16"
          src={comment.author.avatar.url}
          alt={comment.author.name}
        />

        <div className="flex-1 ml-6 flex justify-center flex-col">
          <p className="text-xl mb-2">
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
            )}
          </p>
          <p>
            <Link href={`comment-${comment.id}`} className="text-gray-600 font-400 no-underline hover:underline">
              {dateFullLong(comment.date)}
            </Link>
          </p>
        </div>
      </div>

      <div className="prose mb-4" dangerouslySetInnerHTML={{ __html: comment.content }} />

      {comment.root && comment.replies.length > 0 && (
        <div>
          {comment.replies.map((reply) => (
            <Comment comment={reply} key={`comment-${reply.id}`} />
          ))}
        </div>
      )}

      {comment.root && (
        <p className="hidden">
          <button type="button" className="ml-2 link--blue">
            Reply
          </button>
        </p>
      )}
    </div>
  )
}
export default Comment
