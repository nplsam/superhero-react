import React from 'react';

const HeroCard = ({ hero }) => {

  return (
    <div className="hero-card">
      <div>
        <img src={hero.image.url} alt={hero.name} />
      </div>
      <div>
        <h2>{hero.name}</h2>
      </div>
    </div>
  );
}

export default HeroCard;
