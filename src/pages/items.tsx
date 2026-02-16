import ItemIntro from "../components/item_intro";
import PageBanner from "../components/page_banner";
import ImageBanner from "../assets/ui/NCOW-Banner-5.png";

export default function Items() {
  return (
    <div>
      <PageBanner image={ImageBanner} heading="Items"></PageBanner>
      <ItemIntro></ItemIntro>
    </div>
  );
}
