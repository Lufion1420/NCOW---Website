import HeroBanner from "../components/hero_banner";
import IntroBanner from "../components/intro_banner";
import QuickBanner from "../components/quick_banner";
import CharacterIntro from "../components/character_intro";

export default function HomePage() {
  return (
    <>
      <HeroBanner></HeroBanner>
      <QuickBanner></QuickBanner>
      <IntroBanner></IntroBanner>
      <CharacterIntro></CharacterIntro>
    </>
  );
}
