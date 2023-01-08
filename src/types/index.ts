export interface Link {
  url: string
  title: string
}

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

export interface ArticleCategory {
  slug: string
  name: string
}

export interface Article {
  slug: string
  title: string
  tags: Tag[]
  excerpt: string | null
  visible: boolean
  href: string
  content: string | null
  contentMarkdown: string
  date: string
  project?: string
  path: string
  categories: ArticleCategory[]
  readingTime: number
}

export interface ArticlesListType {
  articles: Article[]
}
export interface Category {
  count: number
  description: string | null
  name: string
  slug: string
}

export interface Tag {
  name: string
  slug: string
  description: string | null
  count: number
}

interface WordpressCategories {
  nodes: ArticleCategory[]
}

interface WordpressTags {
  nodes: Tag[]
}
interface WordpressImage {
  sourceUrl: string
}
interface WordpressImageNode {
  node: WordpressImage
}

export interface WordpressPost {
  slug: string
  title: string
  categories: WordpressCategories | null
  tags: WordpressTags | null
  date: string
  featuredImage?: WordpressImageNode
  content: string
  excerpt: string
}
