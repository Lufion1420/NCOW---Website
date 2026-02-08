import "../styles/intro_banner.css";
import Image from "../assets/ui/NCOW-Juubi.png";
import { Link } from "react-router-dom";

export default function IntroBanner() {
  return (
    <div className="intro_banner container">
      <h2>Experience a Naruto RPG like never seen before!</h2>
      <img src={Image} alt="" />
      <div className="intro_text">
        <p>Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. Featuring custom 3D models, quests, UI, and skillsets, this is the spiritual successor to Naruto World, but bigger, deeper, and more ambitious than ever.</p>
        <button>
          <Link to={"/gameplay"}></Link>
          <span>About Naruto Clash of Worlds</span>
        </button>
      </div>
    </div>
  );
}
