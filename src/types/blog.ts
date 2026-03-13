// Blog type definitions

export interface BlogAuthor {
  id: string
  name: string
  email?: string
  avatar?: string
}

export interface Blog {
  id: string

  title: string
  slug: string

  content: string
  excerpt?: string

  featuredImage?: string

  authorId: string
  author?: BlogAuthor

  tags: string[]

  readingTime?: number

  published?: boolean

  createdAt: string
  updatedAt?: string
}

export interface BlogListResponse {
  blogs: Blog[]
  total: number
}

export interface BlogFilters {
  tag?: string
  authorId?: string
  search?: string
}