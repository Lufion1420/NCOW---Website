import "../styles/intro_banner.css";
import { Link } from "react-router-dom";
import Image_1 from "../assets/images/NCOW-Image_Intro.png";
import Image_2 from "../assets/images/NCOW-Image_Intro_2.png";
import Image_3 from "../assets/characters/NCOW-3DModelGroup.png";
import Image_4 from "../assets/images/NCOW-Image-UI-5.png";

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
      <div className="intro_text">
        <div className="text_container">
          {title ? <h3>{title}</h3> : null}
          {text ? <p>{text}</p> : null}
        </div>
        {image ? <img src={image} alt={image_alt} /> : null}
      </div>
    </div>
  );
}

export default function IntroBanner() {
  const title_1 = "What is NCOW";
  const text_1 = `Naruto Clash of Worlds is a custom Warcraft III mod, that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you decide about the fate of the shinobi world! 
  
  As the spiritual successor to Naruto World, this mod aims to walk into its footsteps, but bigger, deeper, and more ambitious than ever. Also, unlike many other current and older modifications for Warcraft III, this projects goal will be to build a seamless and unique experience, that players can actually enjoy to the fullest. Due to that, the project is expected to grow with its community if so desired and will be very open and appreciative of any feedback or suggestions. Feel free to check out the discord channel or any of the other social media platforms. You can find links in the Footer.`;

  const title_2 = "Gameplay";
  const text_2 = "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. Featuring custom 3D models, quests, UI, and skillsets, this is the spiritual successor to Naruto World, but bigger, deeper, and more ambitious than ever.";

  const title_3 = "Custom Assets";
  const text_3 = "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. Featuring custom 3D models, quests, UI, and skillsets, this is the spiritual successor to Naruto World, but bigger, deeper, and more ambitious than ever.";

  const title_4 = "Custom UI's";
  const text_4 = "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. Featuring custom 3D models, quests, UI, and skillsets, this is the spiritual successor to Naruto World, but bigger, deeper, and more ambitious than ever.";

  return (
    <div className="intro_banner container">
      <div className="intro_banner_heading">
        <h2>Experience a Naruto RPG like never seen before!</h2>
      </div>

      <div className="intro_inner_wrap">
        <RichtextComponent title={title_1} text={text_1} alignment="left" image={Image_1}></RichtextComponent>
        <RichtextComponent title={title_2} text={text_2} alignment="right" image={Image_2}></RichtextComponent>
        <RichtextComponent title={title_3} text={text_3} alignment="left" image={Image_3}></RichtextComponent>
        <RichtextComponent title={title_4} text={text_4} alignment="right" image={Image_4}></RichtextComponent>
      </div>

      <button>
        <span className="heading">Read More</span>
        <Link to={"/gameplay"}></Link>
      </button>
    </div>
  );
}
