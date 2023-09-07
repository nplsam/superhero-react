import React, { useState, useEffect } from 'react'
import { SearchForm, SuperheroList } from '../'

const SearchWidget = () => {
    const [superheroData, setSuperheroData] = useState([])
    const [searchString, setSearchString] = useState("Batgirl")

    useEffect(() => {

        async function searchAPI() {
          try {
            const response = await fetch(`https://www.superheroapi.com/api.php/9909763059065054/search/${searchString}`)
            const rawData = await response.json()

            if (Array.isArray(rawData.results)) {
              const data = rawData.results
              setSuperheroData(data);
            } else {
              console.error('API response does not contain an array of superheroes:', rawData)
            }
          } catch (error) {
            console.error('Error fetching or parsing data:', error)
          }
        }

        searchAPI()

      }, [searchString])
  
    const handleSearch = (userInput) => {
        setSearchString(userInput)
    }

  return (
    <>
    <SearchForm handleSearch={handleSearch} />
    {<SuperheroList superheroData={superheroData} /> }
    </>
  )
}

export default SearchWidget