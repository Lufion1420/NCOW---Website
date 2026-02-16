import "../styles/item_intro.css";
import ItemIcon from "../assets/characters/NCOW_IMG_NarutoBase.png";

export default function ItemIntro() {
  return (
    <div>
      <div className="item_intro container pseudo">
        <div className="item_intro_top">
          <h2 className="item_name">Sword of Kusanagi</h2>
          <h3 className="item_type">Legendary Weapon</h3>
        </div>

        <div className="item_icon_wrap">
          <img src={ItemIcon} alt="Sword of Kusanagi icon" className="item_icon" />
        </div>

        <div className="item_description">
          <p>A legendary chakra-infused blade known for its precision and destructive potential. The Sword of Kusanagi enhances offensive power while offering a strong scaling path into late-game fights.</p>
        </div>

        <div className="item_recipes"></div>
      </div>

      <div className="item_list pseudo">
        <div className="top">
          <button className="general pseudo">
            <span>General</span>
          </button>
          <button className="consumables pseudo">
            <span>Consumables</span>
          </button>
          <button className="scientific pseudo">
            <span>Scientific Ninja Tools</span>
          </button>
          <button className="recipes pseudo">
            <span>Recipes</span>
          </button>
        </div>
        <div className="bottom">
          <div className="item_list_content">
            <div className="item_one"></div>
            <div className="item_two"></div>
            <div className="item_three"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
