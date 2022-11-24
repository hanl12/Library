import React from 'react'
import { useGetData } from '../../../hooks';

export function useMovieDb() {
  const { getData, books, loading } = useGetData()
  const [search, setSearch] = React.useState('a')

  React.useEffect(() => {
    getData(search, 'movieDb')
  }, [search]);

  return {books, setSearch, loading}
}
