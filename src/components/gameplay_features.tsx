import "../styles/gameplay_features.css";

/* 
    Tall Section with a fullscreen big brush background.
    Multiple Sub Areas like: Questing, Missions, Hero Quests, Story Progression, Boss Fights etc. as seperate White Brush backgrounds (content width) with image and text.
    --> Switching layout from Image left and text right to text left and image right every second sub area.
*/

function Feature() {
  return <div className="feature"></div>;
}

export default function GameplayFeatures() {
  return (
    <div className="gameplay_features container">
      <div className="pseudo wrapper">
        <Feature></Feature>
      </div>
    </div>
  );
}
