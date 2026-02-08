import { Link } from "react-router-dom";
import discordIcon from "../assets/icon-discord.svg";
import vkIcon from "../assets/icon-vk.svg";
import instaIcon from "../assets/icon-insta.svg";
import youtubeIcon from "../assets/icon-youtube.svg";
import "../styles/social_media_icons.css";

export default function SocialIcons() {
  return (
    <ul className="social_links">
      <li className="icon-discord">
        <img src={discordIcon} alt="Discord" />
        <Link to={`https://discord.gg/eHyt3YFP5y`}></Link>
      </li>
      <li className="icon-vk">
        <img src={vkIcon} alt="VK" />
        <Link to={`https://vk.com/club215919346`}></Link>
      </li>
      <li className="icon-insta">
        <img src={instaIcon} alt="Instagram" />
        <Link to={`/`}></Link>
      </li>
      <li className="icon-youtube">
        <img src={youtubeIcon} alt="YouTube" />
        <Link to={`https://www.youtube.com/@ncow8830`}></Link>
      </li>
    </ul>
  );
}
