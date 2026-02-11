import "../styles/character_cards.css";
import { useId, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper.css";

import ImageNaruto from "../assets/characters/NCOW_IMG_NarutoBaseXL.png";

export default function CharacterCards() {
  const sliderId = useId().replace(/:/g, "");
  const prevClass = `character_cards_prev_${sliderId}`;
  const nextClass = `character_cards_next_${sliderId}`;
  const paginationClass = `character_cards_pagination_${sliderId}`;

  const characters = [
    {
      naruto: {
        image: ImageNaruto,
        name: "Naruto Uzumaki",
        description: "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. .",
        color: "#F66C2D",
        link: "/characters/naruto",
      },
      sasuke: {
        image: ImageNaruto,
        name: "Sasuke Uchiha",
        description: "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. .",
        color: "#2a3143",
        link: "/characters/sasuke",
      },
      itachi: {
        image: ImageNaruto,
        name: "Itachi Uchiha",
        description: "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. .",
        color: "#A33B45",
        link: "/characters/itachi",
      },
      obito: {
        image: ImageNaruto,
        name: "Obito Uchiha",
        description: "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. .",
        color: "#344155",
        link: "/characters/obito",
      },
      kabuto: {
        image: ImageNaruto,
        name: "Kabuto Yakushi",
        description: "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. .",
        color: "#b2b2b2",
        link: "/characters/kabuto",
      },
      Sasori: {
        image: ImageNaruto,
        name: "Sasori",
        description: "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. .",
        color: "#902020",
        link: "/characters/sasori",
      },
    },
  ];

  const characterList = Object.values(characters[0]);

  return (
    <div className="character_cards">
      <h2>Characters</h2>
      <div className="card_list container">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{ prevEl: `.${prevClass}`, nextEl: `.${nextClass}` }}
          pagination={{
            el: `.${paginationClass}`,
            type: "custom",
            renderCustom: (_swiper, current, total) => `${current}/${total}`,
          }}
          slidesPerView={4}
          spaceBetween={12}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            960: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
          }}
          watchOverflow
        >
          {characterList.map((character) => (
            <SwiperSlide key={character.name}>
              <article className="card" style={{ "--card-hover-color": character.color } as CSSProperties}>
                <img src={character.image} alt={character.name} />
                <Link className="card_image_link" to={character.link} aria-label={`Open ${character.name}`}></Link>
                <div className="card_content">
                  <div className="card_name">{character.name}</div>
                  <div className="card_description">{character.description}</div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="character_cards_controls" aria-label="Character slider controls">
          <button type="button" className={`swiper-button-prev ${prevClass}`} aria-label="Previous characters"></button>
          <div className={`swiper-pagination ${paginationClass}`}></div>
          <button type="button" className={`swiper-button-next ${nextClass}`} aria-label="Next characters"></button>
        </div>
      </div>
    </div>
  );
}
