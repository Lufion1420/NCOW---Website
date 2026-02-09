import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper.css";

import "../styles/character_cards.css";

import Naruto from "../assets/characters/NCOW_IMG_NarutoBaseSelect.png";
import Icon_Naruto from "../assets/characters/NCOW_IMG_NarutoBase.png";
import Naruto_Image_1 from "../assets/characters/NCOW-Placeholder-1.png";
import Naruto_Image_2 from "../assets/characters/NCOW-Placeholder-2.png";

import Sasuke from "../assets/characters/NCOW_IMG_SasukeBaseSelect.png";
import Icon_Sasuke from "../assets/characters/NCOW_IMG_SasukeHebi.png";

import Itachi from "../assets/characters/NCOW_IMG_ItachiAlt_4Select.png";
import Icon_Itachi from "../assets/characters/NCOW_IMG_Itachi.png";

import Obito from "../assets/characters/NCOW_IMG_ObitoMaskedManSelect.png";
import Icon_Obito from "../assets/characters/NCOW_IMG_MaskedMan.png";

export default function CharacterCards() {
  const characters = useMemo(
    () => [
      {
        id: "naruto",
        name: "Naruto Uzumaki",
        title: "Kyuubi Jinchuriki",
        image_main: Naruto,
        icon: Icon_Naruto,
        description: "Der Prinz (oder die Prinzessin) von Azuria und Kapitän der Rangers. Sie sind äußerst geschickt und die einzigen Rathalos-Rider im Land. Der Protagonist hat sich auf seine Pflichten als Ranger konzentriert, indem er das Ökosystem der Monster beschützt und den Ei-Quarz erforscht, als ein schockierendes Ereignis alles verändert. Sie stellen fest, dass sie nur wenig bis gar nichts über die Ereignisse in der Welt und die Beteiligung der Menschen daran wissen. Um die Wahrheit zu erfahren, machen sie sich auf den Weg über den Nord-Meridian und auf verbotenen Boden.",
        link: "/XXX",
        char_images: [Naruto_Image_1, Naruto_Image_2] as string[],
      },
      {
        id: "sasuke",
        name: "Sasuke Uchiha",
        title: "Uchiha Avenger",
        image_main: Sasuke,
        icon: Icon_Sasuke,
        description: "Sasuke description here.",
        link: "/XXX",
        char_images: [] as string[],
      },
      {
        id: "itachi",
        name: "Itachi Uchiha",
        title: "Uchiha Traitor",
        image_main: Itachi,
        icon: Icon_Itachi,
        description: "Itachi description here.",
        link: "/XXX",
        char_images: [] as string[],
      },
      {
        id: "obito",
        name: "Obito Uchiha",
        title: "Masked Man",
        image_main: Obito,
        icon: Icon_Obito,
        description: "Obito description here.",
        link: "/XXX",
        char_images: [] as string[],
      },
    ],
    [],
  );

  const [selectedCharacterId, setSelectedCharacterId] = useState<string>(characters[0].id);

  const selectedCharacter = characters.find((character) => character.id === selectedCharacterId) ?? characters[0];

  return (
    <>
      <div className="character_cards container">
        <div className="char_wrapper">
          <div className="char_content">
            <span className="char_name">{selectedCharacter.name}</span>
            <span className="char_title">{selectedCharacter.title}</span>
            <p className="char_description">{selectedCharacter.description}</p>
            <div className="char_images">
              <Swiper modules={[Navigation, Pagination]} slidesPerView={1} spaceBetween={12} navigation pagination={{ clickable: true }}>
                {selectedCharacter.char_images.length > 0 ? (
                  selectedCharacter.char_images.map((charImage, index) => (
                    <SwiperSlide key={`${selectedCharacter.id}-image-${index}`}>
                      <div className="char_image">
                        <img src={charImage} alt={`${selectedCharacter.name} screenshot ${index + 1}`} />
                      </div>
                    </SwiperSlide>
                  ))
                ) : (
                  <SwiperSlide key={`${selectedCharacter.id}-image-empty`}>
                    <div className="char_image char_image-empty">No additional images yet.</div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
            <button>
              <span>More Info</span>
              <Link to={selectedCharacter.link}></Link>
            </button>
          </div>

          <div className="char_main_image">
            <img src={selectedCharacter.image_main} alt={selectedCharacter.name} />
          </div>
        </div>
      </div>

      <div className="char_list">
        <Swiper modules={[Navigation]} tag="ul" slidesPerView="auto" spaceBetween={6} navigation centeredSlides centeredSlidesBounds>
          {characters.map((character) => (
            <SwiperSlide key={character.id} tag="li">
              <button className={`char_icon_button ${selectedCharacter.id === character.id ? "is-active" : ""}`} onClick={() => setSelectedCharacterId(character.id)} aria-label={`Select ${character.name}`}>
                <img src={character.icon} alt={`${character.name} icon`} />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
