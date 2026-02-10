import { Link } from "react-router-dom";
import "../styles/quick_banner.css";
import Arrow from "../assets/ui/NCOW-Kunai-1_2.png";

type QuickBannerProps = {
  imageSrc?: string;
  linkTo?: string;
  headingText?: string;
  subheadingText?: string;
  quickBannerText?: string;
};

export default function QuickBanner({
  imageSrc,
  linkTo,
  headingText,
  subheadingText,
  quickBannerText,
}: QuickBannerProps) {
  const normalizedLink = linkTo?.trim();
  const hasHeading = Boolean(headingText && headingText.trim());
  const hasSubheading = Boolean(subheadingText && subheadingText.trim());
  const hasQuickText = Boolean(quickBannerText && quickBannerText.trim());

  return (
    <div className="quick_banner">
      <div className="quick_banner_wrapper">
        {imageSrc && <img src={imageSrc} alt="" />}
        <div className="quick_banner_content">
          {normalizedLink ? <Link to={normalizedLink}></Link> : null}
          {hasHeading && <h3>{headingText}</h3>}
          {hasSubheading && (
            <div className="quick_banner_subheading">
              <span>{subheadingText}</span>
            </div>
          )}
          {hasQuickText && (
            <div className="quick_banner_text">
              <span className="glow_effect-primary">{quickBannerText}</span>
              <img src={Arrow} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
