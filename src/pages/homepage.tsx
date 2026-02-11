import HeroBanner from "../components/hero_banner";
import IntroBanner from "../components/intro_banner";
import QuickBanner from "../components/quick_banner";
import CharacterCards from "../components/character_cards";
import Gallery from "../components/gallery";

export default function HomePage() {
  return (
    <>
      <HeroBanner></HeroBanner>
      <QuickBanner linkTo="/XXX" headingText="Jetzt vorbestellen" subheadingText="Dekorüstung für Eleanor: Himmelschuppenkönigin" quickBannerText="Vorgestellbonus sichern"></QuickBanner>
      <IntroBanner></IntroBanner>
      <CharacterCards></CharacterCards>
      <Gallery></Gallery>
    </>
  );
}
