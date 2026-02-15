import { useEffect, useState, type CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/swiper.css";
import "../styles/character_intro.css";
import { CHARACTER_INTRO_CHARACTERS, type SkillButton, type StageSkill } from "../data/character_intro_data";

import Arrow from "../assets/ui/NCOW-Arrow-3.png";

const kitsKonohaCsvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0qvL-ChgsThoIBhpvJty6-waQepQmSZVLGxsNTuVeP6DUgFL2zWXZgfW3Gc8nW2ZNI16y7HFyEUUF/pub?gid=893355125&single=true&output=csv";
const SKILL_BUTTON_ORDER: SkillButton[] = ["q", "w", "e", "r", "d", "f", "c", "z"];

type FetchedSkillData = {
  id: string;
  button: SkillButton;
  row: number;
  skillButton: string;
  title: string;
  description: string;
  targetType: string;
  levelRequirement: string;
};

function parseCsvRows(input: string): string[][] {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentCell = "";
  let inQuotes = false;

  for (let index = 0; index < input.length; index += 1) {
    const char = input[index];

    if (inQuotes) {
      if (char === '"') {
        if (input[index + 1] === '"') {
          currentCell += '"';
          index += 1;
        } else {
          inQuotes = false;
        }
      } else {
        currentCell += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
      continue;
    }

    if (char === ",") {
      currentRow.push(currentCell);
      currentCell = "";
      continue;
    }

    if (char === "\n") {
      currentRow.push(currentCell);
      rows.push(currentRow);
      currentRow = [];
      currentCell = "";
      continue;
    }

    if (char === "\r") {
      continue;
    }

    currentCell += char;
  }

  if (currentCell.length > 0 || currentRow.length > 0) {
    currentRow.push(currentCell);
    rows.push(currentRow);
  }

  return rows;
}

function buildSkillDataById(stageSkills: StageSkill[], rows: string[][]): Record<string, FetchedSkillData> {
  const skillDataById: Record<string, FetchedSkillData> = {};

  for (const stageSkill of stageSkills) {
    const rowCells = rows[stageSkill.row - 1] ?? [];
    skillDataById[stageSkill.id] = {
      id: stageSkill.id,
      button: stageSkill.button,
      row: stageSkill.row,
      skillButton: (rowCells[1] ?? "").trim(),
      title: (rowCells[2] ?? "").trim(),
      description: (rowCells[3] ?? "").trim(),
      targetType: (rowCells[4] ?? "").trim(),
      levelRequirement: (rowCells[5] ?? "").trim(),
    };
  }

  return skillDataById;
}

function getDescriptionParagraphs(description: string | undefined): string[] {
  if (!description) {
    return [];
  }

  return description
    .split(/\r?\n\s*\r?\n/g)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph.length > 0);
}

export default function CharacterIntro() {
  const visibleIconCount = 3;
  const visibleIconGap = 25;
  const characters = CHARACTER_INTRO_CHARACTERS;

  const [selectedCharacterId, setSelectedCharacterId] = useState<string>(characters[0].id);
  const [imageSwiper, setImageSwiper] = useState<SwiperType | null>(null);
  const [imageActiveIndex, setImageActiveIndex] = useState(0);
  const [activeSkillId, setActiveSkillId] = useState<string | null>(null);
  const [fetchedSkillDataById, setFetchedSkillDataById] = useState<Record<string, FetchedSkillData>>({});
  const [isSkillDataLoading, setIsSkillDataLoading] = useState(false);
  const [loadedImageKeys, setLoadedImageKeys] = useState<Record<string, boolean>>({});

  const selectedCharacter = characters.find((character) => character.id === selectedCharacterId) ?? characters[0];
  const selectedCharacterStages = Object.entries(selectedCharacter.stages);
  const imageSlideCount = selectedCharacterStages.length;
  const currentStageEntry = selectedCharacterStages[imageActiveIndex] ?? selectedCharacterStages[0];
  const currentStageId = currentStageEntry[0];
  const selectedCharacterStage = currentStageEntry[1];
  const selectedCharacterMainImages = selectedCharacterStage.main;
  const selectedCharacterMainImageScale = selectedCharacterStage.scale ?? 1;
  const selectedStageSkills = selectedCharacterStage.skills;
  const stageSkillByButton = new Map<SkillButton, StageSkill>(selectedStageSkills.map((skill) => [skill.button, skill]));
  const activeSkillConfig = selectedStageSkills.find((skill) => skill.id === activeSkillId) ?? selectedStageSkills[0] ?? null;
  const activeSkillData = activeSkillConfig ? (fetchedSkillDataById[activeSkillConfig.id] ?? null) : null;
  const activeSkillDescriptionParagraphs = getDescriptionParagraphs(activeSkillData?.description);
  const setImageLoaded = (imageKey: string) => {
    setLoadedImageKeys((previous) => (previous[imageKey] ? previous : { ...previous, [imageKey]: true }));
  };

  useEffect(() => {
    setActiveSkillId(selectedStageSkills[0]?.id ?? null);
  }, [selectedCharacterId, imageActiveIndex, selectedStageSkills]);

  useEffect(() => {
    let cancelled = false;

    async function fetchSkillData() {
      if (selectedStageSkills.length === 0) {
        setFetchedSkillDataById({});
        setIsSkillDataLoading(false);
        return;
      }

      setIsSkillDataLoading(true);

      try {
        const response = await fetch(kitsKonohaCsvUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch Google Sheet data: ${response.status}`);
        }

        const csv = await response.text();
        const rows = parseCsvRows(csv);
        if (!cancelled) {
          setFetchedSkillDataById(buildSkillDataById(selectedStageSkills, rows));
          setIsSkillDataLoading(false);
        }
      } catch (error) {
        console.error(error);
        if (!cancelled) {
          setFetchedSkillDataById({});
          setIsSkillDataLoading(false);
        }
      }
    }

    fetchSkillData();

    return () => {
      cancelled = true;
    };
  }, [selectedStageSkills]);

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
                    <div className="char_image image_loading_shell">
                      {!loadedImageKeys[`slider-${selectedCharacter.id}-${stageId}-${stageData.slider}`] ? (
                        <div className="image_throbber" role="status" aria-live="polite">
                          <span className="image_throbber_spinner" aria-hidden="true"></span>
                        </div>
                      ) : null}
                      <img src={stageData.slider} alt={`${selectedCharacter.name} ${stageId} stage`} className={loadedImageKeys[`slider-${selectedCharacter.id}-${stageId}-${stageData.slider}`] ? "" : "is-loading"} onLoad={() => setImageLoaded(`slider-${selectedCharacter.id}-${stageId}-${stageData.slider}`)} onError={() => setImageLoaded(`slider-${selectedCharacter.id}-${stageId}-${stageData.slider}`)} />
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
            </div>
          </div>

          <div className="char_main_image" style={{ transform: `scale(${selectedCharacterMainImageScale})` }}>
            {selectedCharacterMainImages.map((imageSrc, index) => (
              <div key={`${selectedCharacter.id}-main-image-${index}`} className="image_loading_shell">
                {!loadedImageKeys[`main-${selectedCharacter.id}-${currentStageId}-${index}-${imageSrc}`] ? (
                  <div className="image_throbber" role="status" aria-live="polite">
                    <span className="image_throbber_spinner" aria-hidden="true"></span>
                  </div>
                ) : null}
                <img src={imageSrc} alt={`${selectedCharacter.name} main image ${index + 1}`} className={loadedImageKeys[`main-${selectedCharacter.id}-${currentStageId}-${index}-${imageSrc}`] ? "" : "is-loading"} onLoad={() => setImageLoaded(`main-${selectedCharacter.id}-${currentStageId}-${index}-${imageSrc}`)} onError={() => setImageLoaded(`main-${selectedCharacter.id}-${currentStageId}-${index}-${imageSrc}`)} />
              </div>
            ))}
          </div>
        </div>

        <div className="char_skill_info pseudo">
          <div className="title pseudo">
            <span className="heading">{isSkillDataLoading ? "Loading skill..." : activeSkillData?.title || "Skill Title"}</span>
          </div>
          <div className="description pseudo">
            {isSkillDataLoading ? (
              <div className="skill_loading" role="status" aria-live="polite">
                <span className="skill_loading_spinner" aria-hidden="true"></span>
                <p>Loading skill data...</p>
              </div>
            ) : (
              <div className="skill_description_content">{activeSkillDescriptionParagraphs.length > 0 ? activeSkillDescriptionParagraphs.map((paragraph, index) => <p key={`${activeSkillConfig?.id ?? "skill"}-paragraph-${index}`}>{paragraph}</p>) : <p>Skill description will appear here when you select a skill button.</p>}</div>
            )}
          </div>
          <div className="skill_list">
            <div className="pseudo">
              {SKILL_BUTTON_ORDER.map((button) => {
                const stageSkill = stageSkillByButton.get(button) ?? null;
                const isActive = stageSkill?.id === activeSkillConfig?.id;
                return (
                  <button key={`${selectedCharacter.id}-${button}`} className={`skill_${button}${isActive ? " is-active" : ""}`} type="button" onClick={() => stageSkill && setActiveSkillId(stageSkill.id)} disabled={!stageSkill || isSkillDataLoading} aria-label={`Select ${button.toUpperCase()} skill`} aria-current={isActive ? "true" : undefined} style={stageSkill ? { backgroundImage: `url(${stageSkill.icon})` } : undefined}>
                    {button.toUpperCase()}
                  </button>
                );
              })}
            </div>
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
                <div className="char_icon_image image_loading_shell">
                  {!loadedImageKeys[`icon-${character.id}-${character.icon}`] ? (
                    <div className="image_throbber" role="status" aria-live="polite">
                      <span className="image_throbber_spinner" aria-hidden="true"></span>
                    </div>
                  ) : null}
                  <img src={character.icon} alt={`${character.name} icon`} className={loadedImageKeys[`icon-${character.id}-${character.icon}`] ? "" : "is-loading"} onLoad={() => setImageLoaded(`icon-${character.id}-${character.icon}`)} onError={() => setImageLoaded(`icon-${character.id}-${character.icon}`)} />
                </div>
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
