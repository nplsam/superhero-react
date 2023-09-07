import React from 'react'

export default function Card ({ superhero }) {
  return (
    <div className="superhero-card">
        <div>
            <img src={superhero.image.url}></img>
        </div>
        <div>
            <h2>{superhero.name}</h2>
        </div>
    </div>
  )
}