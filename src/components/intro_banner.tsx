import "../styles/intro_banner.css";
import { Link } from "react-router-dom";
import Image_1 from "../assets/images/NCOW-Image_Intro.png";

type Alignment = "left" | "center" | "right";

type Parameters = {
  title?: string;
  text?: string;
  image?: string;
  image_alt?: string;
  alignment?: Alignment;
};

function RichtextComponent({ title, text, alignment, image, image_alt }: Parameters) {
  return (
    <div className={`text_container align-${alignment}`}>
      {title ? <h3>{title}</h3> : null}
      <div className="intro_text">
        {text ? <p>{text}</p> : null}
        {image ? <img src={image} alt={image_alt} /> : null}
      </div>
    </div>
  );
}

export default function IntroBanner() {
  const title_1 = "What is NCOW";
  const text_1 = "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. Featuring custom 3D models, quests, UI, and skillsets, this is the spiritual successor to Naruto World, but bigger, deeper, and more ambitious than ever.";

  return (
    <div className="intro_banner container">
      <h2>Experience a Naruto RPG like never seen before!</h2>

      <div className="intro_inner_wrap">
        <RichtextComponent title={title_1} text={text_1} alignment="left" image={Image_1}></RichtextComponent>
      </div>
    </div>
  );
}
