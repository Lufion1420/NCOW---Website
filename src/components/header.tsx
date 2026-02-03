import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const mainLinks = [
    { label: "Gameplay", to: "/" },
    { label: "Items", to: "/" },
    { label: "Terrain", to: "/" },
    { label: "Downloads", to: "/" },
    { label: "Guides", to: "/" },
    { label: "Roadmap", to: "/" },
  ];

  const subLinks = [
    { label: "Login", to: "/" },
    { label: "Donations", to: "/" },
    { label: "PLAY HERE", to: "/" },
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
