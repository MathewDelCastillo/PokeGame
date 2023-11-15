import React, { useEffect, useState } from 'react';
import Pokegame from './Pokegame';
import './styles.css';
import Pokedex from './Pokedex';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const refresh = () => {
    window.location.reload();
  }
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
      .then((response) => response.json())
      .then((data) => {
        const promises = data.results.map((result) =>
          fetch(result.url).then((res) => res.json())
        );

        Promise.all(promises).then((pokemonDetails) => {
          setPokemon(pokemonDetails);
          setIsLoading(false);
          console.log(pokemonDetails)
        });

      })
      .catch((error) => console.error('Error fetching Pokemon data:', error));
  }, []);

  return (
    isLoading?(
      <h1>Loading Please Wait ...</h1>
    ) : (
      <div className="app row">
      <button className='btn btn-primary' onClick={refresh}>Click to Battle Again</button>
      <div className='col-12'>
        <h1 id='title'>Pokegame</h1>
        <Pokegame pokemon={pokemon} />
      </div>
      <div className='col-12'>
        <h1 id='dex'>PokeDex</h1>
        <Pokedex pokemon={pokemon} />
      </div>
    </div>
    )
  );
};

export default App;