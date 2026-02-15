//Naruto
import Naruto_Base_1 from "../assets/characters/NCOW-NarutoBaseXL_1.png";
import Naruto_Sage_1 from "../assets/characters/NCOW-NarutoSageXL_1.png";
import Naruto_KCM_1 from "../assets/characters/NCOW-NarutoKCMXL_1.png";
import Icon_Naruto from "../assets/characters/NCOW_IMG_NarutoBase.png";
import Naruto_Slider_Base from "../assets/characters/NCOW-Placeholder-1.png";
import Naruto_Slider_Sage from "../assets/characters/NCOW-Placeholder-2.png";
import Naruto_Slider_KCM from "../assets/characters/NCOW-Placeholder-2.png";
import Naruto_Skill_1 from "../assets/characters/NCOW_IMG_NarutoBase.png";
import Naruto_Skill_2 from "../assets/characters/NCOW_IMG_NarutoBase.png";
import Naruto_Skill_3 from "../assets/characters/NCOW_IMG_NarutoBase.png";
import Naruto_Skill_4 from "../assets/characters/NCOW_IMG_NarutoBase.png";
import Naruto_Skill_5 from "../assets/characters/NCOW_IMG_NarutoBase.png";
import Naruto_Skill_6 from "../assets/characters/NCOW_IMG_NarutoBase.png";
import Naruto_Skill_7 from "../assets/characters/NCOW_IMG_NarutoBase.png";
import Naruto_Skill_8 from "../assets/characters/NCOW_IMG_NarutoBase.png";

//Sasuke
import Sasuke_Base_1 from "../assets/characters/NCOW-SasukeBaseXL_1.png";
import Sasuke_MS_1 from "../assets/characters/NCOW-SasukeMSXL_1.png";
import Sasuke_Slider_Base from "../assets/characters/NCOW-Placeholder-1.png";
import Sasuke_Slider_MS from "../assets/characters/NCOW-Placeholder-1.png";
import Icon_Sasuke from "../assets/characters/NCOW_IMG_SasukeHebi.png";

//Itachi
import Itachi_Base_1 from "../assets/characters/NCOW-ItachiBaseXL_2.png";
import Itachi_Slider_Base from "../assets/characters/NCOW-Placeholder-2.png";
import Icon_Itachi from "../assets/characters/NCOW_IMG_Itachi.png";

//Obito
import Obito_Base_1 from "../assets/characters/NCOW-ObitoBaseXL_1.png";
import Obito_War_1 from "../assets/characters/NCOW-ObitoWarXL_1.png";
import Obito_Slider_Base from "../assets/characters/NCOW-Placeholder-1.png";
import Obito_Slider_War from "../assets/characters/NCOW-Placeholder-2.png";
import Icon_Obito from "../assets/characters/NCOW_IMG_MaskedMan.png";

export type SkillButton = "q" | "w" | "e" | "r" | "d" | "f" | "c" | "z";

export type StageSkill = {
  id: string;
  button: SkillButton;
  row: number;
  icon: string;
};

export type CharacterStage = {
  slider: string;
  main: string[];
  skills: StageSkill[];
  scale?: number;
};

export type Character = {
  id: string;
  name: string;
  title: string;
  icon: string;
  description: string;
  stages: Record<string, CharacterStage>;
};

export const CHARACTER_INTRO_CHARACTERS: Character[] = [
  {
    id: "naruto",
    name: "Naruto Uzumaki",
    title: "Kyuubi Jinchuriki",
    icon: Icon_Naruto,
    stages: {
      base: {
        slider: Naruto_Slider_Base,
        main: [Naruto_Base_1],
        skills: [
          { id: "naruto-base-q", button: "q", row: 9, icon: Naruto_Skill_1 },
          { id: "naruto-base-w", button: "w", row: 13, icon: Naruto_Skill_2 },
          { id: "naruto-base-e", button: "e", row: 17, icon: Naruto_Skill_3 },
          { id: "naruto-base-r", button: "r", row: 21, icon: Naruto_Skill_4 },
          { id: "naruto-base-d", button: "d", row: 25, icon: Naruto_Skill_5 },
          { id: "naruto-base-f", button: "f", row: 30, icon: Naruto_Skill_6 },
          { id: "naruto-base-c", button: "c", row: 38, icon: Naruto_Skill_7 },
          { id: "naruto-base-z", button: "z", row: 34, icon: Naruto_Skill_8 },
        ],
      },
      sage: {
        slider: Naruto_Slider_Sage,
        main: [Naruto_Sage_1],
        skills: [],
      },
      kcm: {
        slider: Naruto_Slider_KCM,
        main: [Naruto_KCM_1],
        skills: [],
        scale: 1.2,
      },
    },
    description:
      "Der Prinz (oder die Prinzessin) von Azuria und KapitÃ¤n der Rangers. Sie sind Ã¤uÃŸerst geschickt und die einzigen Rathalos-Rider im Land. Der Protagonist hat sich auf seine Pflichten als Ranger konzentriert, indem er das Ã–kosystem der Monster beschÃ¼tzt und den Ei-Quarz erforscht, als ein schockierendes Ereignis alles verÃ¤ndert. Sie stellen fest, dass sie nur wenig bis gar nichts Ã¼ber die Ereignisse in der Welt und die Beteiligung der Menschen daran wissen. Um die Wahrheit zu erfahren, machen sie sich auf den Weg Ã¼ber den Nord-Meridian und auf verbotenen Boden.",
  },
  {
    id: "sasuke",
    name: "Sasuke Uchiha",
    title: "Uchiha Avenger",
    icon: Icon_Sasuke,
    stages: {
      base: {
        slider: Sasuke_Slider_Base,
        main: [Sasuke_Base_1],
        skills: [],
        scale: 0.8,
      },
      ms: {
        slider: Sasuke_Slider_MS,
        main: [Sasuke_MS_1],
        skills: [],
        scale: 0.6,
      }
    },
    description:
      "Der Prinz (oder die Prinzessin) von Azuria und KapitÃ¤n der Rangers. Sie sind Ã¤uÃŸerst geschickt und die einzigen Rathalos-Rider im Land. Der Protagonist hat sich auf seine Pflichten als Ranger konzentriert, indem er das Ã–kosystem der Monster beschÃ¼tzt und den Ei-Quarz erforscht, als ein schockierendes Ereignis alles verÃ¤ndert. Sie stellen fest, dass sie nur wenig bis gar nichts Ã¼ber die Ereignisse in der Welt und die Beteiligung der Menschen daran wissen. Um die Wahrheit zu erfahren, machen sie sich auf den Weg Ã¼ber den Nord-Meridian und auf verbotenen Boden.",
  },
  {
    id: "itachi",
    name: "Itachi Uchiha",
    title: "Uchiha Traitor",
    icon: Icon_Itachi,
    stages: {
      base: {
        slider: Itachi_Slider_Base,
        main: [Itachi_Base_1],
        skills: [],
        scale: 0.6,
      },
    },
    description:
      "Der Prinz (oder die Prinzessin) von Azuria und KapitÃ¤n der Rangers. Sie sind Ã¤uÃŸerst geschickt und die einzigen Rathalos-Rider im Land. Der Protagonist hat sich auf seine Pflichten als Ranger konzentriert, indem er das Ã–kosystem der Monster beschÃ¼tzt und den Ei-Quarz erforscht, als ein schockierendes Ereignis alles verÃ¤ndert. Sie stellen fest, dass sie nur wenig bis gar nichts Ã¼ber die Ereignisse in der Welt und die Beteiligung der Menschen daran wissen. Um die Wahrheit zu erfahren, machen sie sich auf den Weg Ã¼ber den Nord-Meridian und auf verbotenen Boden.",
  },
  {
    id: "obito",
    name: "Obito Uchiha",
    title: "Masked Man",
    icon: Icon_Obito,
    stages: {
      base: {
        slider: Obito_Slider_Base,
        main: [Obito_Base_1],
        skills: [],
        scale: 0.8,
      },
      war: {
        slider: Obito_Slider_War,
        main: [Obito_War_1],
        skills: [],
        scale: 0.7,
      }
    },
    description:
      "Der Prinz (oder die Prinzessin) von Azuria und KapitÃ¤n der Rangers. Sie sind Ã¤uÃŸerst geschickt und die einzigen Rathalos-Rider im Land. Der Protagonist hat sich auf seine Pflichten als Ranger konzentriert, indem er das Ã–kosystem der Monster beschÃ¼tzt und den Ei-Quarz erforscht, als ein schockierendes Ereignis alles verÃ¤ndert. Sie stellen fest, dass sie nur wenig bis gar nichts Ã¼ber die Ereignisse in der Welt und die Beteiligung der Menschen daran wissen. Um die Wahrheit zu erfahren, machen sie sich auf den Weg Ã¼ber den Nord-Meridian und auf verbotenen Boden.",
  },
];
