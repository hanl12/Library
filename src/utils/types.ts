export type BookType = {
  id: string
  title: string
  publishedDate: string
  description: string
  image: string
}

export type BooksType = BookType[] | null

export type SearchType = 'google' | 'movieDb'