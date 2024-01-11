import logo from "../assets/PartyPlannerLogo.png";
import YourParty from "../assets/YourParty.png";
import Create from "../assets/Create.png";
import AboutUs from "../assets/AboutUs.png";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbarContainer">
      <Link to="/" className="logoContainer">
        <img src={logo} alt="Pokemon Logo"></img>
      </Link>
      <Link to="/partyPlanner" className="partyplanner">
        <img src={YourParty} alt="Your Party"></img>
      </Link>
      <Link to="/createPokemon" className="createPokemon">
        <img src={Create} alt="Create Pokemon"></img>
      </Link>

      <Link to="/About" className="aboutUs">
        <img src={AboutUs} alt="About Us"></img>
      </Link>
    </div>
  );
}

export default Navbar;
