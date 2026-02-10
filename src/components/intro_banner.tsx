import "../styles/intro_banner.css";
import Naruto from "../assets/ui/NCOW-NarutoSillouhete.png";
import Sasuke from "../assets/ui/NCOW-SasukeSillouhete.png";
import { Link } from "react-router-dom";

export default function IntroBanner() {
  return (
    <div className="intro_banner container">
      <h2>Experience a Naruto RPG like never seen before!</h2>

      <div className="intro_inner_wrap">
        <div className="text_container">
          <img src={Naruto} alt="" />

          <div className="intro_text">
            <p>Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. Featuring custom 3D models, quests, UI, and skillsets, this is the spiritual successor to Naruto World, but bigger, deeper, and more ambitious than ever.</p>
            <button>
              <Link to={"/gameplay"}></Link>
              <span>About NCOW</span>
              <div className="kunai_icon"></div>
            </button>
          </div>
        </div>

        <div className="text_container">
          <div className="intro_text">
            <p>Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. Featuring custom 3D models, quests, UI, and skillsets, this is the spiritual successor to Naruto World, but bigger, deeper, and more ambitious than ever.</p>
            <button>
              <Link to={"/gameplay"}></Link>
              <span>About NCOW</span>
              <div className="kunai_icon"></div>
            </button>
          </div>
          <img src={Sasuke} alt="" />
        </div>
      </div>
    </div>
  );
}
