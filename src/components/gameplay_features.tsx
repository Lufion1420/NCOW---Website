import "../styles/gameplay_features.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";

import Image_Quest_1 from "../assets/images/NCOW-Image-UI-3.png";
import Image_Quest_2 from "../assets/images/NCOW-Image-UI-9.png";

import Image_Shop_1 from "../assets/images/NCOW-Image-UI-5.png";
import Image_Shop_2 from "../assets/images/NCOW-Image-UI-4.png";
import Image_Shop_3 from "../assets/images/NCOW-Image-UI-6.png";
import Image_Shop_4 from "../assets/images/NCOW-Image-UI-7.png";

import Image_Teams_1 from "../assets/images/NCOW-Image_Intro.png";
import Image_Teams_2 from "../assets/images/NCOW-Image_Intro_2.png";
import Image_Teams_3 from "../assets/images/NCOW-Image_Intro_4.png";
import Image_Teams_4 from "../assets/images/NCOW-Image_Intro_6.png";
import Image_Teams_5 from "../assets/images/NCOW-Image_Intro_3.png";
import Image_Teams_6 from "../assets/images/NCOW-Image_Intro_5.png";

/* 
    Tall Section with a fullscreen big brush background.
    Multiple Sub Areas like: Questing, Missions, Hero Quests, Story Progression, Boss Fights etc. as seperate White Brush backgrounds (content width) with image and text.
    --> Switching layout from Image left and text right to text left and image right every second sub area.
*/

type Alignment = "left" | "right";
type ImageCollection = Record<string, string> | string[];

type Props = {
  heading?: string;
  text?: string;
  alignment?: Alignment;
  images?: ImageCollection;
};

const PLACEHOLDER_IMAGES = ["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"];

function Feature({ heading, text, alignment, images }: Props) {
  const paragraphs = text ? text.split(/\r?\n\s*\r?\n/).map((paragraph) => paragraph.trim()) : [];
  const imageList = images ? (Array.isArray(images) ? images : Object.values(images)) : [];
  const renderedImages = imageList.length > 0 ? imageList : PLACEHOLDER_IMAGES;

  return (
    <div className={`feature pseudo alignment-${alignment}`}>
      <div className="title">
        <h2>{heading}</h2>
      </div>
      <div className="text">
        {paragraphs.map((paragraph, index) => (
          <p key={`${heading ?? "feature"}-${index}`}>{paragraph}</p>
        ))}
      </div>
      <div className="images">
        <Swiper slidesPerView={1} spaceBetween={16} breakpoints={{ 769: { slidesPerView: 2.5, spaceBetween: 16 } }}>
          {renderedImages.map((src, index) => (
            <SwiperSlide key={`${heading ?? "feature"}-image-${index}`}>
              <div className="image">
                <img src={src} alt={`${heading ?? "Feature"} image ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

type FeatureContent = {
  heading: string;
  text: string;
  images?: ImageCollection;
};

const content: Record<string, FeatureContent> = {
  Objectives: {
    heading: "Teams and Objectives",
    text: `Naruto Clash of Worlds features four distinct factions, each with their own goals, strategies, and path to victory. Every team offers a fundamentally different gameplay experience, shaping how the story of the match unfolds.

    Akatsuki 
    seeks to capture and seal the Bijuu in order to resurrect the Juubi and cast the Mugen Tsukuyomi, a plan that, if completed, results in their immediate victory. Working alongside them is the Evil faction, an allied but separate team that shares the same ultimate objective. Together, two Akatsuki players and one Evil player form a powerful alliance focused on executing the Eye of the Moon Plan.

    Otogakure operates independently. Rather than following a common goal, their gameplay centers around individual hero-driven questlines and strategic domination of other villages across the map. Their progression is more personal and conquest-oriented, allowing them to shape the world through calculated expansion and ambition.

    Standing against these forces is the Shinobi Alliance, whose primary objective is to protect the shinobi world and prevent the opposing factions from achieving their win conditions. The Alliance is not merely defensive, they have active opportunities to disrupt enemy progress. At critical stages of the game, they can eliminate key entities such as the Juubi or the Gedo Mazo, instantly ending the match in their favor if successful.

    With multiple victory paths, shifting power dynamics, and direct counterplay between factions, every match becomes a dynamic struggle for control over the fate of the shinobi world.`,
    images: { Image_Teams_1, Image_Teams_2, Image_Teams_3, Image_Teams_4, Image_Teams_5, Image_Teams_6 },
  },

  Quests: {
    heading: "Quests and Missions",
    text: `Progression in Naruto Clash of Worlds is deeply rooted in character-driven storytelling and meaningful objectives. Every hero features a unique, anime-inspired questline tailored specifically to their lore, personality, and abilities. These personal quests allow players to unlock powerful stat increases, new techniques, and even entirely new forms. Some transformations are permanent, such as timeskip advancements that fundamentally alter a hero’s spell kit and mechanics and his look, while others are temporary power surges like Sage Mode, Mangekyō Sharingan, or the Susanoo. These systems ensure that character growth feels impactful and true to the Naruto universe.

    The Otogakure faction places an even stronger emphasis on hero quests. Since their path to victory revolves around individual progression and strategic ambition, they have access to additional questlines to balance their unique win condition.
    
    Beyond personal stories, NCOW introduces a structured Mission System tied directly to each village and team. Missions range from D-Rank to S-Rank in difficulty, with higher ranks offering greater challenges and more valuable rewards. Each faction has its own mission pool, reinforcing their identity and playstyle. Missions are accessed through a fully customized interface that tracks: Individual player participation, Overall team mission progress, Completed objectives and unlocked bonuses.

    Successfully completing missions rewards experience, gold, and (especially at higher ranks) rare or unique items. More importantly, missions contribute to village progression, unlocking team-wide bonuses such as stat enhancements or passive effects that benefit every member of the faction. To maintain balance and encourage active participation, missions can only be accepted by one player at a time and must be completed within a set time limit. Failure temporarily restricts that player from retaking the mission, giving others the opportunity to step in and contribute.

    Through personal questlines and cooperative village missions, progression in NCOW is not just about leveling up, it is about shaping your hero, strengthening your faction, and actively influencing the outcome of the world’s conflict.`,
    images: { Image_Quest_1, Image_Quest_2 },
  },

  Support_Characters: {
    heading: "Support Characters",
    text: `Inspired by the Naruto Storm game series, Support Characters introduce an additional tactical layer to combat in Naruto Clash of Worlds. These powerful allies are unlockable throughout the game by completing specific missions or progressing through questlines. Once unlocked, a dedicated custom UI element appears within the main interface, granting access to that Support Character’s unique ability. Each Support Character provides one distinct jutsu, ranging from targeted techniques and area control abilities to fast-moving projectile attacks that strike in a line.

    When activated, the Support Character is temporarily summoned onto the battlefield to perform their jutsu. They are not controllable units, but rather execute their signature move before disappearing again. After use, the ability enters a recharge phase, functioning as a cooldown before it can be called upon again. Although powerful, Support abilities are not without counterplay. Some summons can be interrupted depending on the technique being used, while others require different forms of response. In most cases, built-in mechanics allow opponents to react and counter these abilities, ensuring they enhance combat depth rather than overpower it.

    Support Characters are permanent unlocks and cannot be swapped or removed once obtained, making each choice meaningful and strategic. Certain Support Characters are exclusive to specific factions, while others may be available across multiple teams, reinforcing faction identity and long-term planning. Through careful timing and smart selection, Support Characters become a decisive tool in both team fights and critical encounters, adding cinematic flair and strategic impact to every battle.`,
    images: {},
  },

  Shops: {
    heading: "Shops",
    text: `Item progression in Naruto Clash of Worlds is handled through a fully customized Shop Interface designed for clarity, flexibility, and depth. Rather than relying on standard Warcraft III shop systems, NCOW introduces a structured UI that provides access to multiple specialized shop categories.

    The General Store offers essential equipment and crafting components, including base armor, weaponry, and other commonly used materials required for advanced item recipes.

    The Food Pills Shop focuses on consumables, selling healing items and temporary buffing tools that provide short-term advantages in combat. These items are ideal for clutch situations, boss fights, or coordinated team engagements.

    At the Scrolls of Seal Shop, players can purchase permanent attribute boosts in the form of stat-enhancing scrolls. These function similarly to classic attribute tomes, allowing players to invest gold into long-term character growth.

    The Scientific Ninja Tools Shop expands combat versatility by offering one-time-use jutsu abilities. These tools grant temporary access to additional techniques, enabling greater flexibility across different heroes and playstyles.

    Finally, the Recipe & Crafting Shop provides a streamlined crafting system through an intuitive UI. Players can view recipe requirements, track needed materials, and craft items directly. For convenience, items may also be crafted instantly through the interface at an increased gold cost. In many cases, combining components in the inventory will automatically merge them into the upgraded item.

    Crafting materials can be acquired in various ways, some are available through shops, while others must be obtained by defeating specific enemies or completing certain objectives. This ensures that item progression is tied not only to economy management, but also to exploration and active gameplay. Through its layered shop system, NCOW encourages strategic investment, build diversity, and meaningful decision-making throughout every stage of the match.`,
    images: { Image_Shop_1, Image_Shop_2, Image_Shop_3, Image_Shop_4 },
  },

  Bosses: {
    heading: "Bosses",
    text: `Boss encounters in Naruto Clash of Worlds are designed to be memorable, mechanical, and skill-driven experiences. Every major boss features a fully customized AI system built around fixed attack patterns, character-specific jutsu, and deliberate combat design. Rather than acting as simple high-health NPCs, bosses follow structured behavior cycles. Players must learn patterns, react to telegraphed abilities, and coordinate strategically to succeed. Each encounter is designed to feel challenging but fair, demanding awareness, positioning, and teamwork while remaining rewarding upon victory.

    Many bosses feature multiple combat phases, evolving mechanics, and, depending on the encounter, separate health bars that represent different stages of the fight. As the battle progresses, abilities may change, intensify, or introduce new threats that reshape the encounter dynamically. Gone are the days of simplistic NPC encounters that merely spam basic attacks or stuns. In NCOW, boss battles are cinematic, mechanically engaging showdowns that reflect the scale and intensity of the Naruto universe.`,
    images: {},
  },
};

const list_content = Object.values(content);

export default function GameplayFeatures() {
  return (
    <div className="gameplay_features">
      <div className="pseudo wrapper">
        {list_content.map((feature, index) => (
          <Feature key={feature.heading} heading={feature.heading} text={feature.text} images={feature.images} alignment={index % 2 === 0 ? "left" : "right"}></Feature>
        ))}
      </div>
    </div>
  );
}
