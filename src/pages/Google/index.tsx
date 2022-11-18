import React from 'react'
import { BookType } from '../../utils'
import { useGoogleBooks } from './hooks'

export function Google() {
  const { books } = useGoogleBooks()
  return (
    <div>
      {books && books.map((b: BookType) => <p>{b.title}</p>)}
    </div>
  )
}
