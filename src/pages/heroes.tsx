import PageBanner from "../components/page_banner";
import CharacterIntro from "../components/character_intro";
import ImageBanner from "../assets/ui/NCOW-Banner-5.png";

export default function Characters() {
  return (
    <div>
      <PageBanner image={ImageBanner} heading="Heroes"></PageBanner>
      <CharacterIntro></CharacterIntro>
    </div>
  );
}
