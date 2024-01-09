import React from "react";
import { Link } from "react-router-dom";

function PartyPlanner({ party, removeFromParty }) {
  return (
    <div>
      <h2>Party</h2>
      <ul>
        {party.map((pokemon) => (
          <li key={pokemon.id}>
            <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>{" "}
            <button onClick={() => removeFromParty(pokemon)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PartyPlanner;
