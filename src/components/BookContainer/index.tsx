import React from 'react'
import { BookType } from '../../utils'
import { Searchbar } from '../Searchbar'
import { Skeleton } from '../Skeleton'
import { Book } from './Book'

interface BookContainerProps {
  title: string
  books: BookType[] | null
  setSearch: Function
  loading: boolean
}

export function BookContainer(props: BookContainerProps) {
  return (
    <>
      <h1 className='text-3xl m-10'>{props.title}</h1>
      <Searchbar setSearch={props.setSearch} />
      <div className='book-container'>
        {props.loading ?
          <Skeleton />
          :
          props.books?.length ? props.books.map((book: BookType) => (
            <Book book={book} key={book.id} />
          )) : <p>No se encontró ningún resultado</p>}
      </div>
    </>
  )
}
