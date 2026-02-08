import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper.css";

import JuubiCard from "../assets/ui/NCOW-Juubi-2.png";
/* import Naruto from "../assets/characters/naruto_card_image.png";
import Sasuke from "../assets/characters/sasuke_card_image.png";
import Itachi from "../assets/characters/itachi_card_image.png";
import Obito from "../assets/characters/obito_card_image.png"; */
import "../styles/character_cards.css";

export default function CharacterCards() {
  /*   const characters = [
    {
      naruto: {
        name: "Naruto Uzumaki",
        image: { Naruto },
        description: "Naruto Description here",
      },
      sasuke: {
        name: "Sasuke Uchiha",
        image: { Sasuke },
        description: "Naruto Description here",
      },
      itachi: {
        name: " Itachi Uchiha",
        image: { Itachi },
        description: "Naruto Description here",
      },
      obito: {
        name: "Obito Uchiha",
        image: { Obito },
        description: "Naruto Description here",
      },
    },
  ];
 */
  const cards = [
    {
      name: "Character Name 1",
      image: JuubiCard,
      description: "Character Description here",
    },
    {
      name: "Character Name 2",
      image: JuubiCard,
      description: "Character Description here",
    },
    {
      name: "Character Name 3",
      image: JuubiCard,
      description: "Character Description here",
    },
    {
      name: "Character Name 4",
      image: JuubiCard,
      description: "Character Description here",
    },
  ];

  return (
    <div className="character_cards container">
      <div className="heading">
        <h2>Characters</h2>
      </div>

      <div className="subtitle">Subtitle Characters</div>

      <Swiper
        className="card_list"
        modules={[Navigation, Pagination]}
        slidesPerView={2.5}
        spaceBetween={24}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide className="card" key={card.name}>
            <div className="char_name">
              <span>{card.name}</span>
            </div>
            <div className="card_content">
              <img src={card.image} alt={card.name} />
              <p className="char_description">{card.description}</p>
              <button>
                <a href="">Read More</a>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
