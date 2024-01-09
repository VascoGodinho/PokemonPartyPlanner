import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PokemonDetailsPage({ addToParty }) {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/pokemons`
        );

        const pokemonData = response.data.find(
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
        {Array.isArray(pokemonDetails.type)
          ? pokemonDetails.type.map((type) => type).join(", ")
          : pokemonDetails.type}
      </div>
      <div>
        <strong>Moves:</strong>{" "}
        {Array.isArray(pokemonDetails.moves)
          ? pokemonDetails.moves.map((move) => move).join(", ")
          : pokemonDetails.moves}
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
      <button onClick={() => addToParty(pokemonDetails)}>Add to Party</button>
    </div>
  );
}

export default PokemonDetailsPage;
