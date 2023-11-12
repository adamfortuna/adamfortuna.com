'use client'

/* eslint-disable sonarjs/cognitive-complexity */
import clsx from 'clsx'
import { Article, Comment } from '@/types'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { faX } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoadingSpinner from '@/components/layout/LoadingSpinner'
import { useState } from 'react'
import { saveComment } from './saveComment'

export interface FormInput {
  name: string
  email: string
  website: string
  content: string
  emailReplies: boolean
  newsletterSignup: boolean
}

const ERROR_CLASS = 'form-error'

const CommentForm = ({
  article,
  parentComment,
  onClose,
}: {
  article: Article
  parentComment?: Comment
  onClose: () => void
}) => {
  const router = useRouter()
  const [serverErrors, setServerErrors] = useState<string[]>([])
  const [success, setSuccess] = useState<false | 'APPROVE' | 'PENDING'>(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>()

  const action: () => void = handleSubmit(async (data) => {
    const response = await saveComment({
      commentData: data,
      slug: article.slug,
      articleId: article.id,
      parent: parentComment?.id || null,
    })

    if (response.success && response.status) {
      setSuccess(response.status)
      if (response.status === 'APPROVE') {
        router.refresh()
        router.replace(`/${article.slug}#comment-${response.id}`)
      }
    } else {
      setServerErrors(response.errors || [])
    }
  })

  return (
    <div className="max-w-3xl mx-auto pb-4 mt-2">
      <div className="px-2">
        {success ? (
          <div className={clsx('card py-6 px-4 space-y-4', success === 'APPROVE' ? 'bg-green-100' : 'bg-yellow-100')}>
            <p className="font-semibold">Thanks you for your comment!</p>
            {success === 'APPROVE' ? (
              <p>We're reloading this page to see it in all it's glory. 🔥</p>
            ) : (
              <p>I'll give a look over then you'll see it here. 🙌</p>
            )}
          </div>
        ) : (
          <div className="card bg-white py-6 px-4">
            <div className="flex flex-row justify-between mb-6">
              <h3 className="text-3xl text-sky-800 font-semibold font-handwriting tracking-wider">
                {parentComment ? 'Reply to Comment' : 'New Comment'}
              </h3>

              <div className="ml-4 flex-shrink-0 flex">
                <button
                  type="button"
                  className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={onClose}
                >
                  <span className="sr-only">Close</span>
                  <FontAwesomeIcon icon={faX} />
                </button>
              </div>
            </div>

            {serverErrors.length > 0 ? (
              <p className="text-red-500">Uh oh! The server said the following: {serverErrors.join(', ')}</p>
            ) : (
              false
            )}

            <form action={action}>
              <div>
                <div className="mb-2 space-y-4">
                  <div className="">
                    <label htmlFor="comment-form-name" className="form-label">
                      Name
                      <input
                        {...register('name', { required: true, maxLength: 200 })}
                        className={clsx('form-text ', errors.email ? 'form-error' : '')}
                      />
                    </label>
                    {errors.name ? <span className="text-red-500 text-base">{errors.name.message}</span> : false}
                  </div>

                  <div className="">
                    <label htmlFor="comment-form-name" className="form-label">
                      Email
                      <input
                        {...register('email', { required: true })}
                        type="email"
                        className={clsx('form-text', errors.email ? ERROR_CLASS : '')}
                      />
                    </label>
                    <em className="text-grey-dark block text-sm mt-1">
                      This won't be shown publicly, but we'll use it for your{' '}
                      <a href="https://gravatar.com/" target="_blank" className="link--blue" rel="noreferrer">
                        Gravatar
                      </a>{' '}
                      image.
                    </em>
                    {errors.email ? <span className="text-red-500 text-base">{errors.email.message}</span> : false}
                  </div>
                </div>

                <div className="field flex-grow mb-4 lg:mb-2">
                  <label htmlFor="comment-form-url" className="form-label">
                    Website
                    <input
                      {...register('website')}
                      type="url"
                      className={clsx('form-text', errors.website ? ERROR_CLASS : '')}
                    />
                  </label>
                  <em className="text-grey-dark block text-sm mt-1">Optional. We'll link your name to this URL.</em>
                  {errors.website ? <span className="text-red-500 text-base">{errors.website.message}</span> : false}
                </div>
              </div>

              <div className="mt-6">
                <div className="field mb-6">
                  <label htmlFor="content" className="form-label">
                    Comment
                    <textarea
                      {...register('content', { required: true })}
                      rows={6}
                      className={clsx('form-text', errors.content ? ERROR_CLASS : '')}
                    />
                  </label>
                  {errors.content ? (
                    <div>
                      <span className="text-red-500 text-base">{errors.content.message}</span>
                    </div>
                  ) : (
                    false
                  )}
                </div>

                <div className="field flex flex-col md:flex-row justify-between items-center">
                  <div className="flex flex-col mb-4 lg:mb-0">
                    <label htmlFor="emailReplies" className="form-label md:ml-2 mb-1">
                      <input
                        {...register('emailReplies')}
                        id="emailReplies"
                        type="checkbox"
                        className="form-checkbox mr-1 text-grey-800"
                      />
                      Email me replies to this comment
                    </label>
                    <label htmlFor="newsletterSignup" className="form-label md:ml-2">
                      <input
                        {...register('newsletterSignup')}
                        id="newsletterSignup"
                        type="checkbox"
                        className="form-checkbox mr-1 text-grey-800"
                      />
                      Sign up to my newsletter? (About once a month)
                    </label>
                  </div>

                  <span className="flex flex-row items-center">
                    <button type="submit" className="button space-x-2" aria-label="Submit Comment">
                      <span>Submit Comment</span>
                      {isSubmitting ? <LoadingSpinner size="sm" /> : false}
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default CommentForm
