import { Link } from "react-router-dom";
import "../styles/quick_banner.css";
import Arrow from "../assets/ui/NCOW-Kunai-1_2.png";
import Juubi from "../assets/ui/NCOW-Juubi.png";

export default function QuickBanner() {
  return (
    <div className="quick_banner">
      <div className="quick_banner_wrapper">
        <img src={Juubi} alt="Juubi" />
        <div className="quick_banner_content container">
          <Link to="/XXX"></Link>
          <h3>Jetzt vorbestellen</h3>
          <div className="quick_banner_subheading">
            <span>Dekorüstung für Eleanor: Himmelschuppenkönigin</span>
          </div>
          <div className="quick_banner_text">
            <span className="glow_effect-secondary">Vorgestellbonus sichern</span>
            <img src={Arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
