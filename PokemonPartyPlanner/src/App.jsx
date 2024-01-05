import React from "react";
import HomePage from "./Components/HomePage.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import NotFound from "./Components/NotFoundPage.jsx";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import "./Styles/Navbar.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
