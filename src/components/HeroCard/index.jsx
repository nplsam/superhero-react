import React from 'react';

const HeroCard = ({ hero }) => {

  return (
<div className="hero-card">
      <div>
        <img src={hero.image.url} alt={hero.name} />
      </div>
      <div>
        <h2>{hero.name}</h2>
        <p>Full Nmae: {hero.biography['full-name']}</p>
        <p>Place of Birth: {hero.biography['place-of-birth']}</p>
        <p>Aliases: {hero.biography.aliases}</p>
        <p>Gender: {hero.appearance.gender}</p>
        <p>Work: {hero.work.occupation}</p>
      
  
        
      </div>
    </div>
  );
}

export default HeroCard;
