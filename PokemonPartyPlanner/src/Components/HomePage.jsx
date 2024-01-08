import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/HomePage.css";
import Navbar from "./Navbar";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function HomePage() {
  const [pokedexData, setPokedexData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokedexbackdendapi.adaptable.app/pokemons"
        );

        setPokedexData(response.data);
        console.log(pokedexData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="Navbar fixed-navbar">
        <Navbar />
      </div>
      <div className="App">
        {pokedexData.map((pokemon) => (
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
                  {Array.isArray(pokemon.type)
                    ? pokemon.type.map((type) => type.toUpperCase()).join(", ")
                    : pokemon.type.toUpperCase()}
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
