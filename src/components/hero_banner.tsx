import { Link } from "react-router-dom";
import "../styles/hero_banner.css";
import wallpaper from "../assets/ui/NCOW-Logo-1.png";

export default function HeroBanner() {
  return (
    <div className="hero_banner">
      <img src={wallpaper} alt="Teste" />
    </div>
  );
}
