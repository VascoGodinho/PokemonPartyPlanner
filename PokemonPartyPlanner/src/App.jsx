// App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import HomePage from "./Components/HomePage.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import NotFound from "./Components/NotFoundPage.jsx";
import PokemonDetailsPage from "./Components/PokemonDetailsPage.jsx";
import CreatePokemonForm from "./Components/CreatePokemonForm.jsx";
import PartyPlanner from "./Components/PartyPlanner.jsx";
import "./Styles/Navbar.css";

function App() {
  const [party, setParty] = useState([]);

  const addToParty = (pokemon) => {
    if (party.length < 6) {
      setParty([...party, pokemon]);
    } else {
      // Party is full, prompt user to replace a Pokemon
      const pokemonNames = party.map((p) => p.name);

      // Example using window.prompt, you might want to use a more sophisticated UI
      const replacePokemonName = window.prompt(
        `Choose a Pokemon to replace:\n${pokemonNames.join(", ")}`
      );

      // Find the Pokemon to replace
      const pokemonToReplace = party.find((p) => p.name === replacePokemonName);

      if (pokemonToReplace) {
        // Replace the chosen Pokemon
        const updatedParty = party.map((p) =>
          p.name === replacePokemonName ? pokemon : p
        );
        setParty(updatedParty);
      } else {
        alert("Invalid Pokemon name. No replacement made.");
      }
    }
  };

  const removeFromParty = (pokemonToRemove) => {
    setParty(party.filter((p) => p.id !== pokemonToRemove.id));
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/pokemon/:id"
          element={<PokemonDetailsPage addToParty={addToParty} />}
        />
        <Route path="/createPokemon" element={<CreatePokemonForm />} />
        <Route
          path="/partyPlanner"
          element={
            <PartyPlanner party={party} removeFromParty={removeFromParty} />
          }
        />
        <Route
          path="/partyPlanner/:id"
          element={<PokemonDetailsPage addToParty={addToParty} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
