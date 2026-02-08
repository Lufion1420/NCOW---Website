import { Link } from "react-router-dom";

import discordIcon from "../assets/icons/icon-discord.svg";
import vkIcon from "../assets/icons/icon-vk.svg";
import instaIcon from "../assets/icons/icon-insta.svg";
import youtubeIcon from "../assets/icons/icon-youtube.svg";

import discordIcon_colored from "../assets/icons/icon-discord_colored.png";
import vkIcon_colored from "../assets/icons/icon-vk_colored.png";
import instaIcon_colored from "../assets/icons/icon-insta_colored.png";
import youtubeIcon_colored from "../assets/icons/icon-youtube_colored.png";

import "../styles/social_media_icons.css";

export default function SocialIcons({ useColoredIcons = false }) {
  return (
    <ul className="social_links">
      <li className="icon-discord">
        <img src={useColoredIcons ? discordIcon_colored : discordIcon} alt="Discord" />
        <Link to={`https://discord.gg/eHyt3YFP5y`}></Link>
      </li>
      <li className="icon-vk">
        <img src={useColoredIcons ? vkIcon_colored : vkIcon} alt="VK" />
        <Link to={`https://vk.com/club215919346`}></Link>
      </li>
      <li className="icon-insta">
        <img src={useColoredIcons ? instaIcon_colored : instaIcon} alt="Instagram" />
        <Link to={`/`}></Link>
      </li>
      <li className="icon-youtube">
        <img src={useColoredIcons ? youtubeIcon_colored : youtubeIcon} alt="YouTube" />
        <Link to={`https://www.youtube.com/@ncow8830`}></Link>
      </li>
    </ul>
  );
}
