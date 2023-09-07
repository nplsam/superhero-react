import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HeroCard } from '../../components'
import { useLocation, Link } from "react-router-dom";

const SuperHeroPage = () => {
  const [hero, sethero] = useState({ image: {}, powerstats: {}, biography:{}, appearance:{}, work:{} });
  const { id } = useParams()

  useEffect(() => {
    async function fetchhero() {
      const response = await fetch(`https://www.superheroapi.com/api.php/9909763059065054/${id}`)
      const data = await response.json()
      console.log(data)
      sethero(data)
    }

    fetchhero()

  }, [])

  return (
    <>
    
    <main>
      <HeroCard hero={hero} />
    </main>
      
    </>
  );
}

export default SuperHeroPage;

