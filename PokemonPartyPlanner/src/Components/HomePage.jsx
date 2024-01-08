import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/HomePage.css";
import Navbar from "./Navbar";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import CreatePokemonForm from "./CreatePokemonForm.jsx";

function HomePage() {
  
  const [pokedexData, setPokedexData] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokedexbackdendapi.adaptable.app/pokemons"
        );

        setPokedexData(response.data);
        console.log(pokedexData)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCreatePokemon = (newPokemon) => {
    // Send the new Pokemon data to the server
    axios.post("https://pokedexbackdendapi.adaptable.app/pokemons", newPokemon) // Adjust the URL for creating a new Pokemon
      .then((response) => {
        // Update the local state with the new Pokemon
        setPokedexData((prevData) => [...prevData, response.data]);
        // Hide the CreatePokemonForm after successful submission
        setShowCreateForm(false);
      })
      .catch((error) => console.error('Error creating Pokemon:', error));
  };


  return (
    <div>
      <div className="Navbar fixed-navbar">
        <Navbar />
      </div>
      <div className="App">
        {/* Add a button or a link to display the CreatePokemonForm */}
        <button onClick={() => setShowCreateForm(true)}>Create Pokemon</button>
        {/* Conditionally render the CreatePokemonForm based on user action */}
        {showCreateForm && <CreatePokemonForm onSubmit={handleCreatePokemon} />}
        { pokedexData.map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
            <div className="pokemon-container">
              <div className="pokemon-image">
                <img src={pokemon.sprite} alt={pokemon.name} />
              </div>
              <div className="pokemon-details">
                <div>
                  <strong>NAME:</strong> {pokemon.name.toUpperCase()}
                </div>
                <div>
                  <strong>TYPE:</strong>{" "}
                  {pokemon.type.map((type) => type.toUpperCase()).join(", ")}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
