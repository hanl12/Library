import React from 'react'
import { BookType } from '../../../utils'

interface BookProps {
  book: BookType
}

export function Book({book}: BookProps) {
  return (
    <div className='book-card' key={book.id}>
      <p>{book.title}</p>
      <img src={book.image} alt={book.image} />
      <p>{book.description}</p>
      <p>{book.publishedDate}</p>
    </div>
  )
}
