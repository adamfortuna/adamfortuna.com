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
  featuredImage: WordpressImage

  // Todo: Move these to Post
  tags?: Tag[]
  categories?: Category[]
  excerpt?: string
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

export interface WordpressContent {
  slug: string
  title: string
  date: string
  featuredImage?: WordpressImageNode
  content: string
  project?: string
  guid: string
}

export interface WordpressPost extends WordpressContent {
  categories: WordpressCategories | null
  tags: WordpressTags | null
  excerpt: string
}

export interface WordpressPage extends WordpressContent {}
