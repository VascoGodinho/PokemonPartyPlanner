import React from "react";
import HomePage from "./Components/HomePage.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import NotFound from "./Components/NotFoundPage.jsx";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import PokemonDetailsPage from "./Components/PokemonDetailsPage.jsx";
import "./Styles/Navbar.css";
import CreatePokemonForm from "./Components/CreatePokemonForm.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
        <Route path="/createPokemon" element={<CreatePokemonForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
