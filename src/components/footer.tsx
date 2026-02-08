import { Link } from "react-router-dom";
import "../styles/footer.css";
import logo from "../assets/logos/NCOW-Logo-2.png";
import SocialIcons from "../components/social_media_icons";

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
        <SocialIcons></SocialIcons>
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
