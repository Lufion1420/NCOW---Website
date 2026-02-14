import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logos/NCOW-Logo-1.png";
import "../styles/header.css";

export default function Header() {
  const { pathname } = useLocation();
  const showLogo = pathname !== "/";
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  // Cancels any pending submenu-close timeout.
  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  // Closes the submenu shortly after mouse leave to prevent flicker.
  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setOpenIndex(null);
      closeTimerRef.current = null;
    }, 80);
  };

  // Cleanup timeout when the header unmounts.
  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  // Reset submenu state whenever the route changes.
  useEffect(() => {
    clearCloseTimer();
    setOpenIndex(null);
  }, [pathname]);

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
    {
      label: "Forum",
      to: "/forum",
    },
    { label: "Guides", to: "/guides" },
    { label: "Roadmap", to: "/roadmap" },
  ];

  return (
    <div key={pathname} className="header_wrapper container">
      {showLogo && (
        <Link to="/" className="header_logo">
          <img src={Logo} alt="Logo" />
        </Link>
      )}

      <header className="header">
        <nav>
          <ul className="main-nav">
            {mainLinks.map((link, index) => (
              <li
                key={link.label}
                className={link.children ? "has-submenu" : ""}
                onMouseEnter={() => {
                  if (!link.children) {
                    return;
                  }
                  clearCloseTimer();
                  setOpenIndex(index);
                }}
                onMouseLeave={() => {
                  if (!link.children) {
                    return;
                  }
                  scheduleClose();
                }}
              >
                <Link className="heading" to={link.to}>
                  {link.label}
                </Link>
                {link.children && (
                  <div className={`submenu ${openIndex === index ? "is-open" : ""}`} onMouseEnter={clearCloseTimer} onMouseLeave={scheduleClose}>
                    {link.children.map((child) => (
                      <div key={child.label}>
                        <Link className="heading" to={child.to}>
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

      <button className="header_download_button">
        <span className="heading">Download</span>
        <Link to={"/download"}></Link>
      </button>
    </div>
  );
}
