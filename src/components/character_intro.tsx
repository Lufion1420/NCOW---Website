import Papa from "papaparse";
import { useMemo, useState, type CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/swiper.css";
import "../styles/character_intro.css";

import Arrow from "../assets/ui/NCOW-Arrow-3.png";

import Naruto_1 from "../assets/characters/NCOW_IMG_NarutoBaseXL.png";
import Naruto_2 from "../assets/characters/NCOW_IMG_NarutoBaseXL_2.png";
import Icon_Naruto from "../assets/characters/NCOW_IMG_NarutoBase.png";
import Naruto_Image_1 from "../assets/characters/NCOW-Placeholder-1.png";
import Naruto_Image_2 from "../assets/characters/NCOW-Placeholder-2.png";

import Sasuke from "../assets/characters/NCOW_IMG_NarutoBaseXL.png";
import Icon_Sasuke from "../assets/characters/NCOW_IMG_SasukeHebi.png";

import Itachi from "../assets/characters/NCOW_IMG_NarutoBaseXL.png";
import Icon_Itachi from "../assets/characters/NCOW_IMG_Itachi.png";

import Obito from "../assets/characters/NCOW_IMG_NarutoBaseXL.png";
import Icon_Obito from "../assets/characters/NCOW_IMG_MaskedMan.png";

const kits_konoha = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0qvL-ChgsThoIBhpvJty6-waQepQmSZVLGxsNTuVeP6DUgFL2zWXZgfW3Gc8nW2ZNI16y7HFyEUUF/pubhtml?gid=893355125&single=true";
type Button = "Q" | "W" | "E" | "R" | "D" | "F" | "C" | "Z";

type AbilityRow = {
  character: string;
  abilityName: string;
  description: string;
  cooldown: string;
  button: Button;
};

export default function CharacterIntro() {
  const visibleIconCount = 3;
  const visibleIconGap = 25;
  const characters = useMemo(
    () => [
      {
        id: "naruto",
        name: "Naruto Uzumaki",
        title: "Kyuubi Jinchuriki",
        images: {
          main: { Naruto_1, Naruto_2 },
          stage_slider: [Naruto_Image_1, Naruto_Image_2] as string[],
          icon: Icon_Naruto,
        },
        icon: Icon_Naruto,
        stage: {
          base: {
            main: { Naruto_1, Naruto_2 },
            slider: [Naruto_Image_1, Naruto_Image_2] as string[],
          },
          sage: {},
          kcm: {},
        },
        description: "Der Prinz (oder die Prinzessin) von Azuria und Kapitän der Rangers. Sie sind äußerst geschickt und die einzigen Rathalos-Rider im Land. Der Protagonist hat sich auf seine Pflichten als Ranger konzentriert, indem er das Ökosystem der Monster beschützt und den Ei-Quarz erforscht, als ein schockierendes Ereignis alles verändert. Sie stellen fest, dass sie nur wenig bis gar nichts über die Ereignisse in der Welt und die Beteiligung der Menschen daran wissen. Um die Wahrheit zu erfahren, machen sie sich auf den Weg über den Nord-Meridian und auf verbotenen Boden.",
      },
      {
        id: "sasuke",
        name: "Sasuke Uchiha",
        title: "Uchiha Avenger",
        images: {
          main: Sasuke,
          stage_slider: [] as string[],
          icon: Icon_Sasuke,
        },
        description: "Der Prinz (oder die Prinzessin) von Azuria und Kapitän der Rangers. Sie sind äußerst geschickt und die einzigen Rathalos-Rider im Land. Der Protagonist hat sich auf seine Pflichten als Ranger konzentriert, indem er das Ökosystem der Monster beschützt und den Ei-Quarz erforscht, als ein schockierendes Ereignis alles verändert. Sie stellen fest, dass sie nur wenig bis gar nichts über die Ereignisse in der Welt und die Beteiligung der Menschen daran wissen. Um die Wahrheit zu erfahren, machen sie sich auf den Weg über den Nord-Meridian und auf verbotenen Boden.",
      },
      {
        id: "itachi",
        name: "Itachi Uchiha",
        title: "Uchiha Traitor",
        images: {
          main: Itachi,
          stage_slider: [] as string[],
          icon: Icon_Itachi,
        },
        description: "Der Prinz (oder die Prinzessin) von Azuria und Kapitän der Rangers. Sie sind äußerst geschickt und die einzigen Rathalos-Rider im Land. Der Protagonist hat sich auf seine Pflichten als Ranger konzentriert, indem er das Ökosystem der Monster beschützt und den Ei-Quarz erforscht, als ein schockierendes Ereignis alles verändert. Sie stellen fest, dass sie nur wenig bis gar nichts über die Ereignisse in der Welt und die Beteiligung der Menschen daran wissen. Um die Wahrheit zu erfahren, machen sie sich auf den Weg über den Nord-Meridian und auf verbotenen Boden.",
      },
      {
        id: "obito",
        name: "Obito Uchiha",
        title: "Masked Man",
        images: {
          main: Obito,
          stage_slider: [] as string[],
          icon: Icon_Obito,
        },
        description: "Der Prinz (oder die Prinzessin) von Azuria und Kapitän der Rangers. Sie sind äußerst geschickt und die einzigen Rathalos-Rider im Land. Der Protagonist hat sich auf seine Pflichten als Ranger konzentriert, indem er das Ökosystem der Monster beschützt und den Ei-Quarz erforscht, als ein schockierendes Ereignis alles verändert. Sie stellen fest, dass sie nur wenig bis gar nichts über die Ereignisse in der Welt und die Beteiligung der Menschen daran wissen. Um die Wahrheit zu erfahren, machen sie sich auf den Weg über den Nord-Meridian und auf verbotenen Boden.",
      },
    ],
    [],
  );

  const [selectedCharacterId, setSelectedCharacterId] = useState<string>(characters[0].id);
  const [imageSwiper, setImageSwiper] = useState<SwiperType | null>(null);
  const [imageActiveIndex, setImageActiveIndex] = useState(0);

  const selectedCharacter = characters.find((character) => character.id === selectedCharacterId) ?? characters[0];
  const selectedCharacterMainImages = typeof selectedCharacter.images.main === "string" ? [selectedCharacter.images.main] : Object.values(selectedCharacter.images.main);
  const imageSlideCount = selectedCharacter.images.stage_slider.length > 0 ? selectedCharacter.images.stage_slider.length : 1;

  return (
    <>
      <div className="character_intro container">
        <div className="char_wrapper">
          <div className="char_content">
            <h2 className="char_name">{selectedCharacter.name}</h2>
            <h3 className="char_title">{selectedCharacter.title}</h3>
            <p className="char_description">{selectedCharacter.description}</p>
            <div className="char_images">
              <Swiper
                key={selectedCharacter.id}
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={12}
                onSwiper={(swiper) => {
                  setImageSwiper(swiper);
                  setImageActiveIndex(swiper.activeIndex);
                }}
                onSlideChange={(swiper) => setImageActiveIndex(swiper.activeIndex)}
              >
                {selectedCharacter.images.stage_slider.length > 0
                  ? selectedCharacter.images.stage_slider.map((charImage, index) => (
                      <SwiperSlide key={`${selectedCharacter.id}-image-${index}`}>
                        <div className="char_image">
                          <img src={charImage} alt={`${selectedCharacter.name} screenshot ${index + 1}`} />
                        </div>
                      </SwiperSlide>
                    ))
                  : null}
              </Swiper>

              {selectedCharacter.images.stage_slider.length > 0 ? (
                <div className="char_images_controls">
                  <button className="char_images_prev" aria-label="Previous image" onClick={() => imageSwiper?.slidePrev()} disabled={imageActiveIndex === 0}>
                    <img src={Arrow} alt="" aria-hidden="true" />
                  </button>
                  <div className="char_images_pagination">
                    {Array.from({ length: imageSlideCount }).map((_, index) => (
                      <button key={`${selectedCharacter.id}-pagination-${index}`} type="button" className={`swiper-pagination-bullet ${index === imageActiveIndex ? "swiper-pagination-bullet-active" : ""}`} onClick={() => imageSwiper?.slideTo(index)} aria-label={`Go to image ${index + 1}`} aria-current={index === imageActiveIndex ? "true" : undefined} />
                    ))}
                  </div>
                  <button className="char_images_next" aria-label="Next image" onClick={() => imageSwiper?.slideNext()} disabled={imageActiveIndex >= imageSlideCount - 1}>
                    <img src={Arrow} alt="" aria-hidden="true" />
                  </button>
                </div>
              ) : null}

              <div className="char_skill_buttons"></div>
            </div>
          </div>

          <div className="char_main_image">
            {selectedCharacterMainImages.map((imageSrc, index) => (
              <img key={`${selectedCharacter.id}-main-image-${index}`} src={imageSrc} alt={`${selectedCharacter.name} main image ${index + 1}`} />
            ))}
          </div>
        </div>

        <div className="char_skill_info">
          <div className="title pseudo">
            <span className="heading">Skill Title</span>
          </div>
          <div className="description pseudo">
            <p>This will be the skill description, of the currently clicked / active Skill of that character. This will be the skill description, of the currently clicked / active Skill of that character. This will be the skill description, of the currently clicked / active Skill of that character. This will be the skill description, of the currently clicked / active Skill of that character. This will be the skill description, of the currently clicked / active Skill of that character. This will be the skill description, of the currently clicked / active Skill of that character. This will be the skill description, of the currently clicked / active Skill of that character. This will be the skill description, of the currently clicked / active Skill of that character. This will be the skill description, of the currently clicked / active Skill of that character. This will be the skill description, of the currently clicked / active Skill of that character. This will be the skill description, of the currently clicked / active Skill of that character.</p>
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
                <img src={character.images.icon} alt={`${character.name} icon`} />
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
