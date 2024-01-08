// CreatePokemonForm.jsx
import React, { useState } from 'react';

const CreatePokemonForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    moves: '',
    stats: '',
    sprite: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data if needed
    onSubmit(formData);
    // Reset the form
    setFormData({
      name: '',
      type: '',
      moves: '',
      stats: '',
      sprite: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Type:
        <input type="text" name="type" value={formData.type} onChange={handleChange} />
      </label>
      <label>
        Moves:
        <input type="text" name="moves" value={formData.moves} onChange={handleChange} />
      </label>
      <label>
        Stats:
        <input type="text" name="stats" value={formData.stats} onChange={handleChange} />
      </label>
      <label>
        Sprite:
        <input type="text" name="sprite" value={formData.sprite} onChange={handleChange} />
      </label>
      <button type="submit">Create Pokémon</button>
    </form>
  );
};

export default CreatePokemonForm;
