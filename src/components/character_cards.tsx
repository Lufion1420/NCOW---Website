import "../styles/character_cards.css";
import type { CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";

import ImageNaruto from "../assets/characters/NCOW_IMG_NarutoBaseXL.webp";

export default function CharacterCards() {
  const characters = [
    {
      naruto: {
        image: ImageNaruto,
        name: "Naruto Uzumaki",
        description: "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. .",
        color: "#F66C2D",
      },
      sasuke: {
        image: ImageNaruto,
        name: "Sasuke Uchiha",
        description: "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. .",
        color: "#2a3143",
      },
      itachi: {
        image: ImageNaruto,
        name: "Itachi Uchiha",
        description: "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. .",
        color: "#A33B45",
      },
      obito: {
        image: ImageNaruto,
        name: "Obito Uchiha",
        description: "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. .",
        color: "#344155",
      },
      kabuto: {
        image: ImageNaruto,
        name: "Kabuto Yakushi",
        description: "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. .",
        color: "#b2b2b2",
      },
      Sasori: {
        image: ImageNaruto,
        name: "Sasori",
        description: "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. .",
        color: "#902020",
      },
    },
  ];

  const characterList = Object.values(characters[0]);

  return (
    <div className="character_cards">
      <h2>Characters</h2>
      <div className="card_list container">
        <Swiper slidesPerView={4} spaceBetween={12} watchOverflow>
          {characterList.map((character) => (
            <SwiperSlide key={character.name}>
              <article className="card" style={{ "--card-hover-color": character.color } as CSSProperties}>
                <img src={character.image} alt={character.name} />
                <div className="card_content">
                  <div className="card_name">{character.name}</div>
                  <div className="card_description">{character.description}</div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
