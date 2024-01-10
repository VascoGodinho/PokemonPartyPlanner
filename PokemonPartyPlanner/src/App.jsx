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
import UpdatePokemonForm from "./Components/UpdatePokemonForm.jsx";

function App() {
  const [party, setParty] = useState([]);

  const addToParty = (pokemon) => {
    if (party.length < 6) {
      setParty([...party, pokemon]);
    } else {
      const pokemonNames = party.map((p) => p.name);

      const replacePokemonName = window.prompt(
        `Choose a Pokemon to replace:\n${pokemonNames.join(", ")}`
      );

      const pokemonToReplace = party.find((p) => p.name === replacePokemonName);

      if (pokemonToReplace) {
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
        <Route path="/updatePokemon/:id" element={<UpdatePokemonForm />} />

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
