import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
  <>
    <div className="home-page">
        <div className="cover-image">
            <h1>Superheroes</h1>
            <p>Explore superheroes from the Marvel and DC universe!</p>
        </div>
    </div>
    <section className="card-container">
        <Link to="/superheroes" className="card superheroes-card">Superheroes</Link>
        <Link to="/search" className="card search-card">Search Superheroes</Link>
    </section>
  </>
  )
}

export default HomePage