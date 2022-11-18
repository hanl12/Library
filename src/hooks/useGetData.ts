import React from 'react'
import { BooksType, parseData, SearchType } from '../utils'

const SearchAPI = {
  google: (searchText: string) => `https://www.googleapis.com/books/v1/volumes?q=${searchText}&maxResults=40`,
  movieDb: (searchText: string) =>  `https://api.themoviedb.org/3/search/movie?api_key=71deef937057a7bb6ef40b2568a4bcf0&language=en-US&query=${searchText}&page=1&include_adult=true`,
}

export function useGetData() {
  const [books, setBooks] = React.useState<BooksType>([])

  const getData = async (title: string, searchType: SearchType) => {
    fetch(SearchAPI[searchType](title)).then((response) => response.json()).then((books) => setBooks(parseData(books, searchType)))
  }
  
  return {getData, books}
}
