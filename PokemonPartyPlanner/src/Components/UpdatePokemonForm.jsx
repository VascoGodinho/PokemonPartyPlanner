import React, { useState, useEffect } from "react";
import axios from "axios";

function UpdatePokemonForm({ id }) {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    moves: "",
    stats: {
      hp: 0,
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0,
    },
  });

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/pokemons/${id}`
        );

        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStatsChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
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
      await axios.put(
        `${import.meta.env.VITE_API_URL}/pokemons/${id}`,
        formData
      );

      window.location.href = "/";
    } catch (error) {
      console.error("Error updating Pokemon:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Type:
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
        />
      </label>
      <label>
        Moves:
        <input
          type="text"
          name="moves"
          value={formData.moves}
          onChange={handleChange}
        />
      </label>
      <label>
        Stats:
        <div>
          <label>
            HP:
            <input
              type="number"
              name="hp"
              value={formData.stats.hp}
              onChange={handleStatsChange}
            />
          </label>
          <label>
            Attack:
            <input
              type="number"
              name="attack"
              value={formData.stats.attack}
              onChange={handleStatsChange}
            />
          </label>
          <label>
            Defense:
            <input
              type="number"
              name="defense"
              value={formData.stats.defense}
              onChange={handleStatsChange}
            />
          </label>
          <label>
            Special Attack:
            <input
              type="number"
              name="specialAttack"
              value={formData.stats.specialAttack}
              onChange={handleStatsChange}
            />
          </label>
          <label>
            Special Defense:
            <input
              type="number"
              name="specialDefense"
              value={formData.stats.specialDefense}
              onChange={handleStatsChange}
            />
          </label>
          <label>
            Speed:
            <input
              type="number"
              name="speed"
              value={formData.stats.speed}
              onChange={handleStatsChange}
            />
          </label>
        </div>
      </label>
      <button type="submit">Update Pokemon</button>
    </form>
  );
}

export default UpdatePokemonForm;
