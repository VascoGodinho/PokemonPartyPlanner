import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdatePokemonForm = ({ pokemonId, onClose, onUpdate }) => {
  const [updatedDetails, setUpdatedDetails] = useState({
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
  });

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/pokemons/${pokemonId}`
        );

        setUpdatedDetails(response.data);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [pokemonId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUpdatedDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleTypeChange = (e) => {
    const selectedTypes = Array.from(e.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setUpdatedDetails((prevDetails) => ({
      ...prevDetails,
      type: selectedTypes,
    }));
  };

  const handleMoveChange = (e) => {
    const selectedMoves = Array.from(e.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setUpdatedDetails((prevDetails) => ({
      ...prevDetails,
      moves: selectedMoves,
    }));
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/pokemons/${pokemonId}`,
        updatedDetails
      );
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Error updating Pokemon details:", error);
    }
  };

  return (
    <div>
      <h2>Update Pokemon</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={updatedDetails.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Type:
        <select
          multiple
          name="type"
          value={updatedDetails.type}
          onChange={handleTypeChange}
        ></select>
      </label>
      <label>
        Moves:
        <select
          multiple
          name="moves"
          value={updatedDetails.moves}
          onChange={handleMoveChange}
        ></select>
      </label>
      <label>
        Stats:
        <ul>
          {Object.entries(updatedDetails.stats).map(([stat, value]) => (
            <li key={stat}>
              <strong>{stat}:</strong>
              <input
                type="number"
                name={`stats.${stat}`}
                value={value}
                onChange={handleChange}
              />
            </li>
          ))}
        </ul>
      </label>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default UpdatePokemonForm;
