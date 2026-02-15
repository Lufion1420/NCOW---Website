import PageBanner from "../components/page_banner";
import GameplayFeatures from "../components/gameplay_features";
import Image from "../assets/characters/NCOW-Placeholder-2.png";

export default function Gameplay() {
  return (
    <div>
      <PageBanner image={Image} heading="Gameplay"></PageBanner>
      <GameplayFeatures></GameplayFeatures>
    </div>
  );
}
