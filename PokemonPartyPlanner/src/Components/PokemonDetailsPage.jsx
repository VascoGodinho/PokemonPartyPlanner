

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Styles/PokemonDetailsPage.css";

function PokemonDetailsPage() {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        // Fetching data from the specified URL
        const response = await axios.get(
          "https://raw.githubusercontent.com/VascoGodinho/pokemonJson/main/pokedex.json"
        );

        // Assuming the data is an array of Pokemon objects
        const pokemonData = response.data.pokemons.find(
          (pokemon) => pokemon.id === parseInt(id)
        );

        if (pokemonData) {
          setPokemonDetails(pokemonData);
        } else {
          console.error("Pokemon not found");
        }
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  const spriteUrl = pokemonDetails.sprite;

  return (
    <div>
      <h1>{pokemonDetails.name}</h1>
      <div className="pokemon-DetailsPage-img">
        <img
          src={spriteUrl}
          alt={pokemonDetails.name}
          style={{ maxWidth: "100%", height: "auto" }}
          className="pokemon-image"
        />
      </div>
      <div>
        <strong>Type:</strong>{" "}
        {pokemonDetails.type.map((type) => type).join(", ")}
      </div>
      <div>
        <strong>Moves:</strong>{" "}
        {pokemonDetails.moves.map((move) => move).join(", ")}
      </div>
      <div>
        <strong>Stats:</strong>
        <ul>
          {Object.entries(pokemonDetails.stats).map(([stat, value]) => (
            <li key={stat}>
              <strong>{stat}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonDetailsPage;
 

