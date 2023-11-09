export interface Link {
  url: string
  title: string
}
export type WordpressClientIdentifier = 'adamfortuna' | 'hardcover' | 'minafi'

export interface Project {
  slug: string
  tags?: string[]
  links: Link[]
  description: string
  salary: string
  role: string
  employed: boolean
  years_active: string
  category: string // app |
  size: string
  state: 'idea' | 'development' | 'live' | 'retired' | 'transferred' | 'left'
  state_description: string
  title: string
  icon_url: string
  date_started: string
  date_ended: string
  poster_url: string
}

export interface Article {
  slug: string
  title: string
  content?: string
  date: string
  project: WordpressClientIdentifier
  readingTime?: number
  external: boolean
  url: string
  featuredImage?: WordpressImage
  allowComments?: boolean
  commentCount: number

  // Todo: Move these to Post
  tags?: Tag[]
  categories?: Category[]
  excerpt?: string
  comments?: Comment[]
}

export interface Post extends Article {}
export interface Page extends Article {}

export interface ArticlesListType {
  articles: Article[]
}
export interface Category {
  count?: number
  description?: string
  name: string
  slug: string
}

export interface Tag {
  name: string
  slug: string
  description?: string
  count?: number
  __typename?: string
}

interface WordpressCategories {
  nodes: Category[]
}

interface WordpressMedia {
  width: number
  height: number
}
interface WordpressTags {
  nodes: Tag[]
}
interface WordpressImage {
  sourceUrl: string
  mediaDetails?: WordpressMedia
}
interface WordpressImageNode {
  node: WordpressImage
}
interface Avatar {
  url: string
  width?: number
  height?: number
}
interface WordpressAuthor {
  url?: string
  name: string
  avatar: Avatar
}
interface WordpressAuthorNode {
  node: WordpressAuthor
}
export interface Author extends WordpressAuthor {}

export interface Webmention {
  source_url: string
  target_url: string
}
export type CommentType = 'mention' | 'comment' | 'like' | 'repost'
export interface Comment {
  author: Author
  content: string
  id: number
  date: string
  type: CommentType
  webmention: Webmention
  root: boolean
  replies: Comment[]
}
export interface WordPressComment {
  author: WordpressAuthorNode
  content: string
  databaseId: number
  replies?: WordpressComments
  date: string
  status: 'APPROVE' | 'PENDING'
  type?: CommentType
  parentId: number | null
  webmention: {
    author_avatar?: string
    author_url?: string
    webmention_source_url?: string
    webmention_target_url?: string
  }
}
interface WordpressComments {
  nodes: WordPressComment[]
}

export interface WordpressContent {
  slug: string
  title: string
  date: string
  featuredImage?: WordpressImageNode
  content: string
  project?: string
  guid: string
  comments?: WordpressComments
  commentStatus: 'open' | 'closed'
  commentCount?: number
}

export interface WordpressPost extends WordpressContent {
  categories: WordpressCategories | null
  tags: WordpressTags | null
  excerpt: string
}

export interface WordpressPage extends WordpressContent {}

interface HardcoverImageType {
  url: string
  height: number
  width: number
}
interface HardcoverAuthor {
  name: string
}
interface HardcoverContributionType {
  contribution: string
  author: HardcoverAuthor
}
interface BookType {
  title: string
  slug: string
  cachedImage: HardcoverImageType
  contributions: HardcoverContributionType[]
}
interface BookReviewType {
  id: number
  rating: number
  book: BookType
  reviewedAt: string
  review?: string
  likesCount: number
}
export interface BookReviewReadType {
  id: number
  startedAt?: string
  finishedAt: string
  userBook: BookReviewType
}
