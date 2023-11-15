import React from 'react';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Pokecard = ( pokemon ) => (
  <div className="pokecard col-2">
    <h3>{capitalizeFirstLetter(pokemon.name)}</h3>
    <img src={pokemon.image} alt={pokemon.name} />
    <p>Types: {pokemon.type.map(type => type.type.name).join(', ')}</p>
    <p>Experience: {pokemon.base_experience}</p>
  </div>
);

export default Pokecard;

