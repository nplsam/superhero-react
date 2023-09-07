import React, { useState } from 'react'

const SearchForm = ({ handleSearch, lastSearch }) => {

const [ inputValue, setInputValue ] = useState('')

const handleInput = (e) => {
    const newInput = e.target.value 
    setInputValue(newInput)
}

const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch(inputValue)
    setInputValue("")
}

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput}
            placeholder={lastSearch}
            value={inputValue} required />
        <input type="submit" value="Search" />
    </form>
  )
}

export default SearchForm