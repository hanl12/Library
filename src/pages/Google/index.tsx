import React from 'react'
import { BookContainer } from '../../components'
import { useGoogleBooks } from './hooks'

export function Google() {
  const { books, setSearch, loading } = useGoogleBooks()
  return (
    <BookContainer title='Google API' books={books} setSearch={setSearch} loading={loading} />
  )
}
