import React, { useState } from "react";
import "../Styles/CreatePokemon.css";

const CreatePokemonForm = () => {
  const [pokemonData, setPokemonData] = useState({
    name: "",
    type: [],
    moves: [],
    stats: {
      hp: 0,
      attack: 0,
      defense: 0,
      "special-attack": 0,
      "special-defense": 0,
      speed: 0,
    },
    sprite: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPokemonData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMovesChange = (e) => {
    const { value } = e.target;
    setPokemonData((prevData) => ({
      ...prevData,
      moves: value.split(",").map((move) => move.trim()),
    }));
  };

  const handleStatsChange = (e) => {
    const { name, value } = e.target;
    setPokemonData((prevData) => ({
      ...prevData,
      stats: {
        ...prevData.stats,
        [name]: parseInt(value, 10),
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/pokemons`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pokemonData),
      });

      if (!response.ok) {
        throw new Error("Failed to add Pokemon");
      }

      setPokemonData({
        name: "",
        type: [],
        moves: [],
        stats: {
          hp: 0,
          attack: 0,
          defense: 0,
          "special-attack": 0,
          "special-defense": 0,
          speed: 0,
        },
        sprite: "",
      });

      console.log("Pokemon added successfully!");
    } catch (error) {
      console.error("Error adding Pokemon:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-group">
        Pokemon Name:
        <input
          type="text"
          name="name"
          value={pokemonData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label className="form-group">
        Type:
        <input
          type="text"
          name="type"
          value={pokemonData.type}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label className="form-group">
        Moves (comma-separated):
        <input
          type="text"
          name="moves"
          value={pokemonData.moves.join(", ")}
          onChange={handleMovesChange}
        />
      </label>
      <br />
      <label className="form-group">
        Stats:
        <br />
        HP:{" "}
        <input
          type="number"
          name="hp"
          value={pokemonData.stats.hp}
          onChange={handleStatsChange}
        />
        Attack:{" "}
        <input
          type="number"
          name="attack"
          value={pokemonData.stats.attack}
          onChange={handleStatsChange}
        />
        Defense:{" "}
        <input
          type="number"
          name="defense"
          value={pokemonData.stats.defense}
          onChange={handleStatsChange}
        />
        Special Attack:{" "}
        <input
          type="number"
          name="special-attack"
          value={pokemonData.stats["special-attack"]}
          onChange={handleStatsChange}
        />
        Special Defense:{" "}
        <input
          type="number"
          name="special-defense"
          value={pokemonData.stats["special-defense"]}
          onChange={handleStatsChange}
        />
        Speed:{" "}
        <input
          type="number"
          name="speed"
          value={pokemonData.stats.speed}
          onChange={handleStatsChange}
        />
      </label>
      <br />
      <label className="form-group">
        Sprite URL:
        <input
          type="text"
          name="sprite"
          value={pokemonData.sprite}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Add Pokemon</button>
    </form>
  );
};

export default CreatePokemonForm;
