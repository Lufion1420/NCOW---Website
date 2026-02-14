import PageBanner from "../components/page_banner";
import GameplayFeatures from "../components/gameplay_features";
import Image from "../assets/wallpapers/NCOW-Wallpaper-5.png";

export default function Gameplay() {
  return (
    <div>
      <PageBanner image={Image} heading="Gameplay"></PageBanner>
      <GameplayFeatures></GameplayFeatures>
    </div>
  );
}
