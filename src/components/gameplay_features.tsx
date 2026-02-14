import "../styles/gameplay_features.css";

/* 
    Tall Section with a fullscreen big brush background.
    Multiple Sub Areas like: Questing, Missions, Hero Quests, Story Progression, Boss Fights etc. as seperate White Brush backgrounds (content width) with image and text.
    --> Switching layout from Image left and text right to text left and image right every second sub area.
*/

type Alignment = "left" | "right";
type Props = {
  heading?: string;
  text?: string;
  alignment?: Alignment;
};

function Feature({ heading, text, alignment }: Props) {
  return (
    <div className={`feature pseudo alignment-${alignment}`}>
      <div className="title">
        <h2>{heading}</h2>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
    </div>
  );
}

const content = {
  Quests: {
    heading: "Quests",
    text: "This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text!",
  },

  Missions: {
    heading: "Missions",
    text: "This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text!",
  },
};

const list_content = Object.values(content);

export default function GameplayFeatures() {
  return (
    <div className="gameplay_features">
      <div className="pseudo wrapper">
        {list_content.map((heading: string, text: string, alignment: Alignment) => (
          <Feature heading={heading} text={text} alignment={alignment}></Feature>
        ))}
      </div>
    </div>
  );
}
