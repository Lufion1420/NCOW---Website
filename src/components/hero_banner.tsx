import { Link } from "react-router-dom";
import "../styles/hero_banner.css";
import logo from "../assets/logos/NCOW-Logo-1.png";

export default function HeroBanner() {
  return (
    <div className="hero_banner">
      <img src={logo} alt="NCOW Logo" />
      <span>Coming Soon!</span>
    </div>
  );
}
