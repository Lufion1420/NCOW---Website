import "../styles/character_cards.css";

import ImageNaruto from "../assets/characters/NCOW_IMG_NarutoBaseXL.webp";

export default function CharacterCards() {
  const characters = [
    {
      naruto: {
        image: ImageNaruto,
        name: "Naruzo Uzumaki",
        description: "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. Featuring custom 3D models, quests, UI, and skillsets, this is the spiritual successor to Naruto World, but bigger, deeper, and more ambitious than ever.",
      },
      sasuke: {
        image: ImageNaruto,
        name: "Sasuke Uchiha",
        description: "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. Featuring custom 3D models, quests, UI, and skillsets, this is the spiritual successor to Naruto World, but bigger, deeper, and more ambitious than ever.",
      },
      itachi: {
        image: ImageNaruto,
        name: "Itachi Uchiha",
        description: "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. Featuring custom 3D models, quests, UI, and skillsets, this is the spiritual successor to Naruto World, but bigger, deeper, and more ambitious than ever.",
      },
      obito: {
        image: ImageNaruto,
        name: "Obito Uchiha",
        description: "Naruto Clash of Worlds is a custom Warcraft III mod that lets you experience the Naruto story as a full-scale RPG. Choose one of four factions, Akatsuki, Konoha, Otogakure, or Evil and dive into story-driven gameplay where you define your role. Featuring custom 3D models, quests, UI, and skillsets, this is the spiritual successor to Naruto World, but bigger, deeper, and more ambitious than ever.",
      },
    },
  ];

  return (
    <div className="character_cards">
      <h2>Characters</h2>
      <div className="card_list">
        <div className="card">
          <img src="" alt="" />
          <div className="card_content">
            <div className="card_name"></div>
            <div className="card_description"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
