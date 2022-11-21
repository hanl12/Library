import React from 'react'
import { BookContainer } from '../../components';
import { useMovieDb } from './hooks';

export function MovieDb() {
  const { books, setSearch, loading } = useMovieDb()

  return (
    <BookContainer title='Movies DB' books={books} setSearch={setSearch} loading={loading} />
  )
}
