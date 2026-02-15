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

export type Button = "Q" | "W" | "E" | "R" | "D" | "F" | "C" | "Z";

export type StageSkill = {
  id: string;
  button: Button;
  title: string;
  description: string;
};

export type CharacterStage = {
  slider: string;
  main: string[];
  skills: StageSkill[];
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
        slider: Sasuke,
        main: [Sasuke],
        skills: [],
      },
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
        slider: Itachi,
        main: [Itachi],
        skills: [],
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
        slider: Obito,
        main: [Obito],
        skills: [],
      },
    },
    description:
      "Der Prinz (oder die Prinzessin) von Azuria und KapitÃ¤n der Rangers. Sie sind Ã¤uÃŸerst geschickt und die einzigen Rathalos-Rider im Land. Der Protagonist hat sich auf seine Pflichten als Ranger konzentriert, indem er das Ã–kosystem der Monster beschÃ¼tzt und den Ei-Quarz erforscht, als ein schockierendes Ereignis alles verÃ¤ndert. Sie stellen fest, dass sie nur wenig bis gar nichts Ã¼ber die Ereignisse in der Welt und die Beteiligung der Menschen daran wissen. Um die Wahrheit zu erfahren, machen sie sich auf den Weg Ã¼ber den Nord-Meridian und auf verbotenen Boden.",
  },
];
