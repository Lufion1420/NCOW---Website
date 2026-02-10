import "../styles/intro_banner.css";
import Arrow from "../assets/ui/NCOW-Kunai-3.png";
import IntroVideo from "../assets/videos/NCOW-Trailer_1.mp4";
import { Link } from "react-router-dom";

export default function IntroBanner() {
  return (
    <div className="intro_banner container">
      <h2>Experience a Naruto RPG like never seen before!</h2>

      <div className="intro_inner_wrap">
        {/* <div className="intro_video">
          <div>
            <video autoPlay loop muted playsInline controls>
              <source src={IntroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div> */}

        <div className="intro_text">
          <p>Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. Featuring custom 3D models, quests, UI, and skillsets, this is the spiritual successor to Naruto World, but bigger, deeper, and more ambitious than ever.</p>
          <button>
            <Link to={"/gameplay"}></Link>
            <span>About Naruto Clash of Worlds</span>
            <img src={Arrow} alt="Arrow Right" />
          </button>
        </div>
      </div>
    </div>
  );
}
