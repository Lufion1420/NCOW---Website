import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const mainLinks = [
    {
      label: "Gameplay",
      to: "/gameplay",
      children: [
        { label: "Items", to: "/items" },
        { label: "Heroes", to: "/heroes" },
        { label: "Terrain", to: "/terrain" },
      ],
    },
    { label: "Forum", to: "/forum" },
    { label: "Guides", to: "/guides" },
    { label: "Roadmap", to: "/roadmap" },
  ];

  return (
    <header className="header container">
      <nav>
        <ul className="main-nav">
          {mainLinks.map((link) => (
            <li key={link.label} className={link.children ? "has-submenu" : ""}>
              <Link to={link.to} className="hover-underline-animation">
                {link.label}
              </Link>
              {link.children && (
                <div className="submenu">
                  {link.children.map((child) => (
                    <div key={child.label}>
                      <Link className="hover-underline-animation" to={child.to}>
                        {child.label}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
