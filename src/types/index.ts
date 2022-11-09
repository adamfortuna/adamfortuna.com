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

export interface Article {
  slug: string
  title: string
  tags: string[]
  visible: boolean
  href: string
  content: string | null
  contentMarkdown: string
  date: string
  project?: string
  path: string
}

export interface ArticleFrontmatter {
  title: string
  date: string

  href?: string
  url?: string

  // Todo: Normalize these to be the same
  slug?: string
  permalink?: string
  id?: string

  categories?: string[]
  tags?: string[]
}
