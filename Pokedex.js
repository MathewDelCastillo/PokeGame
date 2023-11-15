import React from 'react';
import Pokecard from './Pokecard';

const Pokedex = ({ pokemon, isWinner, totalExp }) => (
  <div className={`pokedex ${isWinner ? 'winner' : ''} row`}>
    {pokemon.map((p,id) => (
      <Pokecard
        key={id}
        id={id}
        name={p.name}
        type={p.types}
        image={p.sprites.front_default}
        base_experience={p.base_experience}
      />
    ))}
    {isWinner && <p className="winner-message" style={{ textAlign: 'center',fontSize: '25px' }}>THIS HAND WINS!</p>}
    {(isWinner || totalExp > 0) && (
      <p style={{ fontSize: '16px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', textAlign: 'center' }}>
        Team Total Experience: {totalExp}
      </p>
    )}
    </div>
);

export default Pokedex;