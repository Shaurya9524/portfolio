export type BlogPost = {
  slug: string
  date: string
  tag: string
  title: string
  desc: string
  tags: string[]
  readTime: string
}

export type PostsByYear = {
  year: string
  posts: BlogPost[]
}
