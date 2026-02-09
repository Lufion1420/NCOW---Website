import "../styles/character_cards.css";
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
      },
      sasuke: {
        image: ImageNaruto,
        name: "Sasuke Uchiha",
        description: "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. .",
      },
      itachi: {
        image: ImageNaruto,
        name: "Itachi Uchiha",
        description: "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. .",
      },
      obito: {
        image: ImageNaruto,
        name: "Obito Uchiha",
        description: "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. .",
      },
      kabuto: {
        image: ImageNaruto,
        name: "Kabuto Yakushi",
        description: "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. .",
      },
      Sasori: {
        image: ImageNaruto,
        name: "Sasori",
        description: "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. .",
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
              <article className="card">
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
