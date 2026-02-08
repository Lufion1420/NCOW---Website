import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
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
  return (
    <div className="character_cards container">
      <div className="heading">
        <h2>Characters</h2>
      </div>

      <span className="subtitle">Subtitle Characters</span>

      <div className="card_list">
        <div className="card">
          <span className="char_name">Character Name</span>
          <img src="../assets/ui/NCOW-Juubi-2.png" alt="" />
          <p className="char_description">Character Description here</p>
          <button>
            <a href="">Read More</a>
          </button>
        </div>
      </div>
    </div>
  );
}
