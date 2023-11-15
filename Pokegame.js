import React from 'react';
import Pokedex from './Pokedex';

let shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

let calculateTotalExperience = (hand) => {
  return hand.reduce((total, pokemon) => total + pokemon.base_experience, 0);
};

let determineWinner = (hand1, hand2) => {
  let totalExp1 = calculateTotalExperience(hand1);
  let totalExp2 = calculateTotalExperience(hand2);
  return totalExp1 > totalExp2 ? 1 : totalExp1 < totalExp2 ? 2 : 0;
};

let Pokegame = ({ pokemon }) => {
  let shuffledPokemon = shuffleArray([...pokemon]);
  let hand1 = shuffledPokemon.slice(0, 4);
  let hand2 = shuffledPokemon.slice(5, 9);
  let totalExp1 = calculateTotalExperience(hand1);
  let totalExp2 = calculateTotalExperience(hand2);
  let winner = determineWinner(hand1, hand2);
  return (
    <div className="pokegame">
      <Pokedex pokemon={hand1} isWinner={winner === 1} totalExp={totalExp1} />
      <Pokedex pokemon={hand2} isWinner={winner === 2} totalExp={totalExp2}/>
    </div>
  );
};

export default Pokegame;