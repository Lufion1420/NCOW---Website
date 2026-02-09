import { useMemo, useState, type CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper.css";
import "../styles/character_intro.css";

import Arrow from "../assets/ui/NCOW-Arrow-1.png";

import Naruto_1 from "../assets/characters/NCOW_IMG_NarutoBaseXL.webp";
import Naruto_2 from "../assets/characters/NCOW_IMG_NarutoSageXL.png";
import Icon_Naruto from "../assets/characters/NCOW_IMG_NarutoBase.png";
import Naruto_Image_1 from "../assets/characters/NCOW-Placeholder-1.png";
import Naruto_Image_2 from "../assets/characters/NCOW-Placeholder-2.png";

import Sasuke from "../assets/characters/NCOW_IMG_NarutoBaseXL.webp";
import Icon_Sasuke from "../assets/characters/NCOW_IMG_SasukeHebi.png";

import Itachi from "../assets/characters/NCOW_IMG_NarutoBaseXL.webp";
import Icon_Itachi from "../assets/characters/NCOW_IMG_Itachi.png";

import Obito from "../assets/characters/NCOW_IMG_NarutoBaseXL.webp";
import Icon_Obito from "../assets/characters/NCOW_IMG_MaskedMan.png";

export default function CharacterIntro() {
  const visibleIconCount = 3;
  const visibleIconGap = 25;
  const characters = useMemo(
    () => [
      {
        id: "naruto",
        name: "Naruto Uzumaki",
        title: "Kyuubi Jinchuriki",
        image_main: { Naruto_1, Naruto_2 },
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
  const selectedCharacterMainImages = typeof selectedCharacter.image_main === "string" ? [selectedCharacter.image_main] : Object.values(selectedCharacter.image_main);

  return (
    <>
      <div className="character_intro_heading">
        <h2>Characters</h2>
      </div>

      <div className="character_intro container">
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
          </div>

          <div className="char_main_image">
            {selectedCharacterMainImages.map((imageSrc, index) => (
              <img key={`${selectedCharacter.id}-main-image-${index}`} src={imageSrc} alt={`${selectedCharacter.name} main image ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="char_list" style={{ "--visible-icons": visibleIconCount, "--icon-gap": `${visibleIconGap}px` } as CSSProperties}>
        <button className="char_list_prev swiper-button-prev" aria-label="Previous character">
          <img src={Arrow} alt="" aria-hidden="true" />
        </button>
        <Swiper modules={[Navigation]} tag="ul" slidesPerView={visibleIconCount} spaceBetween={visibleIconGap} navigation={{ prevEl: ".char_list_prev", nextEl: ".char_list_next" }} watchOverflow>
          {characters.map((character) => (
            <SwiperSlide key={character.id} tag="li">
              <button className={`char_icon_button ${selectedCharacter.id === character.id ? "is-active" : ""}`} onClick={() => setSelectedCharacterId(character.id)} aria-label={`Select ${character.name}`}>
                <img src={character.icon} alt={`${character.name} icon`} />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="char_list_next swiper-button-next" aria-label="Next character">
          <img src={Arrow} alt="" aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
