import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HeroCard } from '../../components'

const SuperHeroPage = () => {
  const [hero, sethero] = useState({ image: {}, rating: {} });
  const { id } = useParams()

  useEffect(() => {
    async function fetchhero() {
      const response = await fetch(`https://www.superheroapi.com/api/9909763059065054/${id}`)
      const data = await response.json()
      sethero(data)
    }

    fetchhero()

  }, [])

  return (
    <main>
      <HeroCard hero={hero} />
    </main>
  );
}

export default SuperHeroPage;

