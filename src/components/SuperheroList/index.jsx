import React from 'react'
import Card from '../Card'

const SuperheroList = ({ superheroData }) => {

    function renderSuperheroes() {
        return superheroData
            .filter(s => s.image && s.name ? true : false )
            .map(s => <Card key={s.id} superhero={s} />)
    }

  return (
    <div className="hero-list">
        { renderSuperheroes() }
    </div>
  )
}

export default SuperheroList