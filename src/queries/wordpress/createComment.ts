import { adamfortunaClient } from '@/lib/wordpressClient'

export const insertComment = `
mutation CreateComment($name: String!, $email: String!, $url: String, $content: String!, $commentOn: Int, $parent: ID) {
  createComment(
    input: {author: $name, authorEmail: $email, authorUrl: $url, content: $content, commentOn: $commentOn, parent: $parent, type: "comment"}
  ) {
    success
    comment {
      id: databaseId
      status
    }
  }
}
`

interface InsertCommentProps {
  name: string
  commentOn: number
  parent: number | null
  email: string
  url?: string
  content: string
}

type SaveCommentType = {
  success: boolean
  errors?: string[]
  id?: number
  status?: 'APPROVE' | 'PENDING'
}

interface Error {
  message: string
}

interface InsertCommentResult {
  errors?: Error[]
  data: {
    createComment: {
      success: boolean
      comment?: {
        id: number
        status: 'APPROVE' | 'PENDING'
      }
    }
  }
}

export const createComment = async (params: InsertCommentProps): Promise<SaveCommentType> => {
  const result: InsertCommentResult = await adamfortunaClient({
    query: insertComment,
    variables: params,
  })

  if (result.errors) {
    return {
      success: false,
      errors: result.errors.map((error) => error.message),
    }
  }
  const commentResult = result.data.createComment

  if (!commentResult.success || !commentResult.comment) {
    return {
      success: false,
    }
  }

  return {
    success: true,
    id: commentResult.comment.id,
    status: commentResult.comment.status,
  }
}
