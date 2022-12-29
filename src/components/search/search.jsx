import React, { useCallback } from 'react'
import { useState } from 'react'
import './search.css'

function Search({searchVal, onSearch}) {
  const handleInputChange = useCallback(event => {
    onSearch(event)
  }, [onSearch])

  console.log(searchVal);

  return (
    <>
      <div className="search-box">
        <img src="/image/search.png" alt="search" />
        <input type="text" placeholder='Search Ctegories....' value={searchVal} onChange={handleInputChange} />
      </div>
    </>
  )
}

export default Search