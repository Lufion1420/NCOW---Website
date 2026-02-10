import HeroBanner from "../components/hero_banner";
import IntroBanner from "../components/intro_banner";
import QuickBanner from "../components/quick_banner";
import CharacterCards from "../components/character_cards";
import Juubi from "../assets/ui/NCOW-Juubi.png";

export default function HomePage() {
  return (
    <>
      <HeroBanner></HeroBanner>
      <QuickBanner
        imageSrc={Juubi}
        linkTo="/XXX"
        headingText="Jetzt vorbestellen"
        subheadingText="Dekorüstung für Eleanor: Himmelschuppenkönigin"
        quickBannerText="Vorgestellbonus sichern"
      ></QuickBanner>
      <IntroBanner></IntroBanner>
      <CharacterCards></CharacterCards>
    </>
  );
}
