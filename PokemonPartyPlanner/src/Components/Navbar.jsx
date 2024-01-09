import logo from "../assets/PartyPlannerLogo.png";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbarContainer">
      <Link to="/" className="logoContainer">
        <img src={logo} alt="Pokemon Logo"></img>
      </Link>
      <Link to="/partyPlanner" className="partyplanner">
        <p>Your Party</p>
      </Link>
      <Link to="/createPokemon" className="createPokemon">
        <p>Create a Pokemon</p>
      </Link>

      <Link to="/About" className="aboutUs">
        <p>About Us</p>
      </Link>
    </div>
  );
}

export default Navbar;
