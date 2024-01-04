
import React from "react";
import "./HomePage.css"; 
import Pokedex from "./pokedex.json"

function HomePage() {
 
  return (
    <div className="App">
    {Pokedex.pokemons.map((pokemon) => (
      <div key={pokemon.id} className="pokemon-container">
        <div className="pokemon-image">
          <img src={pokemon.sprite} alt={pokemon.name} />
        </div>
        <div className="pokemon-details">
          <div><strong>Name:</strong> {pokemon.name}</div>
          <div><strong>Type:</strong> {pokemon.type.join(', ')}</div>
          <div><strong>Moves:</strong> {pokemon.moves.join(', ')}</div>
          <div><strong>Stats:</strong></div>
          <ul>
            {Object.entries(pokemon.stats).map(([stat, value]) => (
              <li key={stat}>
                <strong>{stat}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
  );
}

export default HomePage;
