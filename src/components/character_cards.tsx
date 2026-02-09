import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper.css";
import "../styles/character_cards.css";

import Naruto from "../assets/characters/NCOW_IMG_NarutoBaseSelect.png";
import Icon_Naruto from "../assets/characters/NCOW_IMG_NarutoBase.png";

import Sasuke from "../assets/characters/NCOW_IMG_SasukeBaseSelect.png";
import Icon_Sasuke from "../assets/characters/NCOW_IMG_SasukeHebi.png";

import Itachi from "../assets/characters/NCOW_IMG_ItachiAlt_4Select.png";
import Icon_Itachi from "../assets/characters/NCOW_IMG_Itachi.png";

import Obito from "../assets/characters/NCOW_IMG_ObitoMaskedManSelect.png";
import Icon_Obito from "../assets/characters/NCOW_IMG_MaskedMan.png";

export default function CharacterCards() {
  const characters = [
    {
      naruto: {
        name: "Naruto Uzumaki",
        title: "Kyuubi Jinjuriki",
        image_main: { Naruto },
        icon: { Icon_Naruto },
        description: "Naruto Description here1",
        link: "/XXX",
      },
      sasuke: {
        name: "Sasuke Uchiha",
        title: "Uchiha Avenger",
        image: { Sasuke },
        icon: { Icon_Sasuke },
        description: "Naruto Description here",
        link: "/XXX",
      },
      itachi: {
        name: " Itachi Uchiha",
        title: "Uchiha Traitor",
        image_main: { Itachi },
        icon: { Icon_Itachi },
        description: "Naruto Description here",
        link: "/XXX",
      },
      obito: {
        name: "Obito Uchiha",
        title: "Masked Man",
        image_main: { Obito },
        icon: { Icon_Obito },
        description: "Naruto Description here",
        link: "/XXX",
      },
    },
  ];

  return (
    <div className="character_cards container">
      <div className="char_content">
        <div className="char_name"></div>
        <div className="char_title"></div>
        <div className="char_description"></div>
        <div className="char_images">
          <div className="char_image"></div>
          <div className="char_image"></div>
        </div>
        <button>
          <a href=""></a>
        </button>
      </div>

      <ul className="char_list">
        <li>
          <button>
            <img src="" alt="Icon Character" />
          </button>
        </li>
      </ul>
    </div>
  );
}
