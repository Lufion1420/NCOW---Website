import { Link } from "react-router-dom";
import "../styles/footer.css";
import discordIcon from "../assets/icon-discord.svg";
import vkIcon from "../assets/icon-vk.svg";
import instaIcon from "../assets/icon-insta.svg";
import youtubeIcon from "../assets/icon-youtube.svg";
import logo from "../assets/logos/NCOW-Logo-4.png";

export default function Footer() {
  return (
    <footer className="footer container">
      <nav className="footer_nav">
        <ul className="footer_links">
          <li>
            <Link className="hover-underline-animation" to={`/about`}>
              About NCOW
            </Link>
          </li>
          <li>
            <Link className="hover-underline-animation" to={`/support`}>
              Support
            </Link>
          </li>
          <li>
            <Link className="hover-underline-animation" to={`/join`}>
              Join the Team
            </Link>
          </li>
        </ul>
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
        <div className="logo">
          <img src={logo} alt="NCOW Logo" />
        </div>
        <div className="footer_copyright">
          <span>© Website designed and developed by Maurice Samba.</span>
          <p>NARUTO © 1999 by Masashi Kishimoto/SHUEISHA Inc.</p>
          <p>©2002 MASASHI KISHIMOTO / 2007 SHIPPUDEN All Rights Reserved.</p>
          <p>BORUTO: NARUTO NEXT GENERATIONS ⓒ 2002 MASASHI KISHIMOTO / 2017 BORUTO. All Rights Reserved.</p>
        </div>
        <div className="footer_policies">
          <Link className="hover-underline-animation" to={`/privacy_policy`}>
            Privacy Policy
          </Link>
          <Link className="hover-underline-animation" to={`/terms_of_service`}>
            Terms of Service
          </Link>
          <Link className="hover-underline-animation" to={`/cookie_preferences`}>
            Cookie Preferences
          </Link>
        </div>
      </nav>
    </footer>
  );
}
