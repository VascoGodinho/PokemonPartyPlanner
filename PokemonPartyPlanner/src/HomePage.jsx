import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HomePage.css";

function HomePage() {
  const [pokedexData, setPokedexData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/VascoGodinho/pokemonJson/main/pokedex.json"
        );
        setPokedexData(response.data.pokemons);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {pokedexData.map((pokemon) => (
        <div key={pokemon.id} className="pokemon-container">
          <div className="pokemon-image">
            <img src={pokemon.sprite} alt={pokemon.name} />
          </div>
          <div className="pokemon-details">
            <div>
              <strong>Name:</strong> {pokemon.name.toUpperCase()}
            </div>
            <div>
              <strong>Type:</strong> {pokemon.type.join(", ")}
            </div>
            <div>
              <strong>Moves:</strong> {pokemon.moves.join(", ")}
            </div>
            <div>
              <strong>Stats:</strong>
            </div>
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
