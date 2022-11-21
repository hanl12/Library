import React from 'react'

export function useSearchBar(setSearch: Function) {
  const inputRef = React.useRef<HTMLInputElement>(null)

  function handleSearch(){
    setSearch(inputRef.current?.value)
  }

  return {
    handleSearch,
    inputRef
  }
}
