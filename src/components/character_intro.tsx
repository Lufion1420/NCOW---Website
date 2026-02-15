import { useEffect, useMemo, useState, type CSSProperties } from "react";
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

type StageSkill = {
  id: string;
  button: Button;
  title: string;
  description: string;
};

type CharacterStage = {
  slider: string;
  main: string[];
  skills: StageSkill[];
};

type Character = {
  id: string;
  name: string;
  title: string;
  icon: string;
  description: string;
  stages: Record<string, CharacterStage>;
};

export default function CharacterIntro() {
  const visibleIconCount = 3;
  const visibleIconGap = 25;

  const characters = useMemo(
    (): Character[] => [
      {
        id: "naruto",
        name: "Naruto Uzumaki",
        title: "Kyuubi Jinchuriki",
        icon: Icon_Naruto,
        stages: {
          base: {
            slider: Naruto_Image_1,
            main: [Naruto_1, Naruto_2],
            skills: [],
          },
          sage: {
            slider: Naruto_Image_2,
            main: [Naruto_1, Naruto_2],
            skills: [],
          },
        },
        description: "Der Prinz (oder die Prinzessin) von Azuria und Kapitän der Rangers. Sie sind äußerst geschickt und die einzigen Rathalos-Rider im Land. Der Protagonist hat sich auf seine Pflichten als Ranger konzentriert, indem er das Ökosystem der Monster beschützt und den Ei-Quarz erforscht, als ein schockierendes Ereignis alles verändert. Sie stellen fest, dass sie nur wenig bis gar nichts über die Ereignisse in der Welt und die Beteiligung der Menschen daran wissen. Um die Wahrheit zu erfahren, machen sie sich auf den Weg über den Nord-Meridian und auf verbotenen Boden.",
      },
      {
        id: "sasuke",
        name: "Sasuke Uchiha",
        title: "Uchiha Avenger",
        icon: Icon_Sasuke,
        stages: {
          base: {
            slider: Sasuke,
            main: [Sasuke],
            skills: [],
          },
        },
        description: "Der Prinz (oder die Prinzessin) von Azuria und Kapitän der Rangers. Sie sind äußerst geschickt und die einzigen Rathalos-Rider im Land. Der Protagonist hat sich auf seine Pflichten als Ranger konzentriert, indem er das Ökosystem der Monster beschützt und den Ei-Quarz erforscht, als ein schockierendes Ereignis alles verändert. Sie stellen fest, dass sie nur wenig bis gar nichts über die Ereignisse in der Welt und die Beteiligung der Menschen daran wissen. Um die Wahrheit zu erfahren, machen sie sich auf den Weg über den Nord-Meridian und auf verbotenen Boden.",
      },
      {
        id: "itachi",
        name: "Itachi Uchiha",
        title: "Uchiha Traitor",
        icon: Icon_Itachi,
        stages: {
          base: {
            slider: Itachi,
            main: [Itachi],
            skills: [],
          },
        },
        description: "Der Prinz (oder die Prinzessin) von Azuria und Kapitän der Rangers. Sie sind äußerst geschickt und die einzigen Rathalos-Rider im Land. Der Protagonist hat sich auf seine Pflichten als Ranger konzentriert, indem er das Ökosystem der Monster beschützt und den Ei-Quarz erforscht, als ein schockierendes Ereignis alles verändert. Sie stellen fest, dass sie nur wenig bis gar nichts über die Ereignisse in der Welt und die Beteiligung der Menschen daran wissen. Um die Wahrheit zu erfahren, machen sie sich auf den Weg über den Nord-Meridian und auf verbotenen Boden.",
      },
      {
        id: "obito",
        name: "Obito Uchiha",
        title: "Masked Man",
        icon: Icon_Obito,
        stages: {
          base: {
            slider: Obito,
            main: [Obito],
            skills: [],
          },
        },
        description: "Der Prinz (oder die Prinzessin) von Azuria und Kapitän der Rangers. Sie sind äußerst geschickt und die einzigen Rathalos-Rider im Land. Der Protagonist hat sich auf seine Pflichten als Ranger konzentriert, indem er das Ökosystem der Monster beschützt und den Ei-Quarz erforscht, als ein schockierendes Ereignis alles verändert. Sie stellen fest, dass sie nur wenig bis gar nichts über die Ereignisse in der Welt und die Beteiligung der Menschen daran wissen. Um die Wahrheit zu erfahren, machen sie sich auf den Weg über den Nord-Meridian und auf verbotenen Boden.",
      },
    ],
    [],
  );

  const [selectedCharacterId, setSelectedCharacterId] = useState<string>(characters[0].id);
  const [imageSwiper, setImageSwiper] = useState<SwiperType | null>(null);
  const [imageActiveIndex, setImageActiveIndex] = useState(0);
  const [activeSkillId, setActiveSkillId] = useState<string | null>(null);

  const selectedCharacter = characters.find((character) => character.id === selectedCharacterId) ?? characters[0];
  const selectedCharacterStages = Object.entries(selectedCharacter.stages);
  const imageSlideCount = selectedCharacterStages.length;
  const currentStageEntry = selectedCharacterStages[imageActiveIndex] ?? selectedCharacterStages[0];
  const selectedCharacterStage = currentStageEntry[1];
  const selectedCharacterMainImages = selectedCharacterStage.main;
  const selectedStageSkills = selectedCharacterStage.skills;
  const activeSkill = selectedStageSkills.find((skill) => skill.id === activeSkillId) ?? selectedStageSkills[0] ?? null;

  useEffect(() => {
    setActiveSkillId(selectedStageSkills[0]?.id ?? null);
  }, [selectedCharacterId, imageActiveIndex, selectedStageSkills]);

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
                {selectedCharacterStages.map(([stageId, stageData], index) => (
                  <SwiperSlide key={`${selectedCharacter.id}-stage-${stageId}-${index}`}>
                    <div className="char_image">
                      <img src={stageData.slider} alt={`${selectedCharacter.name} ${stageId} stage`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {imageSlideCount > 0 ? (
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

              <div className="char_skill_buttons">
                {selectedStageSkills.map((skill) => (
                  <button key={`${selectedCharacter.id}-skill-${skill.id}`} type="button" className={activeSkill?.id === skill.id ? "is-active" : ""} onClick={() => setActiveSkillId(skill.id)}>
                    {skill.button}
                  </button>
                ))}
              </div>
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
            <span className="heading">{activeSkill?.title ?? "Skill Title"}</span>
          </div>
          <div className="description pseudo">
            <p>{activeSkill?.description ?? "This will be the skill description, of the currently clicked / active Skill of that character. This will be the skill description, of the currently clicked / active Skill of that character. This will be the skill description, of the currently clicked / active Skill of that character. This will be the skill description, of the currently clicked / active Skill of that character. This will be the skill description, of the currently clicked / active Skill of that character. This will be the skill description, of the currently clicked / active Skill of that character. This will be the skill description, of the currently clicked / active Skill of that character. This will be the skill description, of the currently clicked / active Skill of that character. This will be the skill description, of the currently clicked / active Skill of that character. This will be the skill description, of the currently clicked / active Skill of that character. This will be the skill description, of the currently clicked / active Skill of that character."}</p>
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
