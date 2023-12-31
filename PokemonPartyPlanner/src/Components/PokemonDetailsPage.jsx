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
          `https://pokedexbackdendapi.adaptable.app/pokemons/${id}`
        );

        setPokemonDetails(response.data);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  const handleDelete = async () => {
    if (!pokemonDetails) {
      console.error("Cannot delete. Pokemon details not available.");
      return;
    }

    const userInput = prompt(
      `To confirm deletion, please enter the name of the Pokemon: ${pokemonDetails.name}`
    );

    if (userInput === pokemonDetails.name) {
      try {
        await axios.delete(
          `https://pokedexbackdendapi.adaptable.app/pokemons/${id}`
        );
        window.location.href = "/";
      } catch (error) {
        console.error("Error deleting Pokemon:", error);
      }
    } else {
      alert("Deletion canceled. Names do not match.");
    }
  };

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemonDetails.name}</h1>
      <div className="pokemon-DetailsPage-img">
        <img
          src={pokemonDetails.sprite}
          alt={pokemonDetails.name}
          style={{ maxWidth: "100%", height: "auto" }}
          className="pokemon-image"
        />
      </div>
      <div>
        <strong>Type:</strong>{" "}
        {Array.isArray(pokemonDetails.type)
          ? pokemonDetails.type.join(", ")
          : pokemonDetails.type}
      </div>
      <div>
        <strong>Moves:</strong>{" "}
        {Array.isArray(pokemonDetails.moves)
          ? pokemonDetails.moves.join(", ")
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
      <button onClick={handleDelete}>Delete Pokemon</button>
    </div>
  );
}

export default PokemonDetailsPage;
