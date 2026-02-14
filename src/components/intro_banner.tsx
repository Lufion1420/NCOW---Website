import "../styles/intro_banner.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
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
  delay?: number;
};

function RichtextComponent({ title, text, alignment, image, image_alt, delay = 0 }: Parameters) {
  const textContainerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentContainer = textContainerRef.current;

    if (!currentContainer) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(currentContainer);

    return () => {
      observer.disconnect();
    };
  }, []);

  const paragraphs = text ? text.split(/\r?\n\s*\r?\n/).map((paragraph) => paragraph.trim()) : [];

  return (
    <div ref={textContainerRef} className={`text_container align-${alignment} ${isVisible ? "visible" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="intro_text">
        <div className="inner_text_container">
          {title ? <h3>{title}</h3> : null}
          {paragraphs.map((paragraph, index) => (
            <p key={`${title ?? "intro"}-${index}`}>{paragraph}</p>
          ))}
        </div>
        <div>{image ? <img src={image} alt={image_alt} /> : null}</div>
      </div>
    </div>
  );
}

export default function IntroBanner() {
  const title_1 = "What is NCOW";
  const text_1 = `Naruto Clash of Worlds is a custom Warcraft III mod, that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions: Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you decide about the fate of the shinobi world! 

  As the spiritual successor to Naruto World, this mod aims to walk into its footsteps, but bigger, deeper, and more ambitious than ever! Also, unlike many other current and older modifications for Warcraft III, this projects goal will be to build a seamless and unique experience, that players can actually enjoy to the fullest. 
  
  Feel free to check out the discord channel or any of the other social media platforms. You can find links in the Footer.`;

  const title_2 = "Gameplay";
  const text_2 = `Naruto Clash of Worlds delivers rich and immersive RPG gameplay built around handcrafted, unique characters, each designed with their own playstyle, abilities, and combat identity.

  Explore a carefully crafted terrain that recreates iconic locations from the Naruto universe, faithfully rebuilt within the Warcraft III World Editor.

  Engage in thoughtfully designed systems that deepen immersion and replayability, including Personal Character Questlines, Village Quests, challenging Boss Fights featuring custom AI behavior, interactive Support Characters and much more.`;

  const title_3 = "Custom Assets";
  const text_3 = `Naruto Clash of Worlds is built with a strong focus on originality and visual identity. The mod features a wide range of custom-made assets, including high-quality 3D character models, detailed environmental doodads, and unique visual effects designed and/or optimized specifically for NCOW.

  From carefully modeled shinobi to atmospheric village props and handcrafted spell animations, every asset is created to enhance immersion and bring the Naruto world to life within the Warcraft III engine.

  Each asset is thoughtfully integrated into the gameplay and world design, ensuring that visuals don’t just look impressive, but also support storytelling, combat clarity, and overall immersion.`;

  const title_4 = "User Interface";
  const text_4 = `Naruto Clash of Worlds features a fully customized User Interface designed from the ground up. Every menu and system has been reimagined from Shop interfaces and Character Selection screens to Game Mode selection and the main in-game HUD.

  The gameplay interface itself has been carefully crafted to enhance clarity, style, and immersion. Abilities, health, resources, and character statistics are presented in a way that feels both intuitive and visually distinct, blending seamlessly with the Naruto-inspired aesthetic of the project.

  The result is a polished and immersive experience where every interaction whether selecting a character, browsing a shop, or engaging in combat feels intentional and uniquely tailored to the world of NCOW.`;

  return (
    <div className="intro_banner container">
      <div className="intro_banner_heading">
        <h2>Experience a Naruto RPG like never seen before!</h2>
      </div>

      <div className="intro_inner_wrap">
        <RichtextComponent title={title_1} text={text_1} alignment="left" image={Image_1} delay={50}></RichtextComponent>
        <RichtextComponent title={title_2} text={text_2} alignment="right" image={Image_2} delay={150}></RichtextComponent>
        <RichtextComponent title={title_3} text={text_3} alignment="left" image={Image_3} delay={250}></RichtextComponent>
        <RichtextComponent title={title_4} text={text_4} alignment="right" image={Image_4} delay={350}></RichtextComponent>
      </div>

      <button>
        <span className="heading">Read More</span>
        <Link to={"/gameplay"}></Link>
      </button>
    </div>
  );
}
