import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const mainLinks = [
    { label: "Gameplay", to: "/gameplay" },
    { label: "Items", to: "/items" },
    { label: "Heroes", to: "/heroes" },
    { label: "Forum", to: "/forum" },
    { label: "Terrain", to: "/terrain" },
    { label: "Guides", to: "/guides" },
    { label: "Roadmap", to: "/roadmap" },
  ];

  const subLinks = [
    { label: "Login", to: "/login" },
    { label: "Donations", to: "/" },
    { label: "PLAY HERE", to: "/downloads" },
  ];

  return (
    <header className="header container">
      <h1 className="logo">
        <img src="https://placehold.co/75x75" alt="NCOW - Logo" />
        <Link to={`/`}></Link>
      </h1>
      <nav>
        <ul className="main-nav">
          {mainLinks.map((link) => (
            <li key={link.label} className="hover-underline-animation">
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <ul className="sub-nav">
          {subLinks.map((link) => (
            <li key={link.label} className="hover-underline-animation">
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
