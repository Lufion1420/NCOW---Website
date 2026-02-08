import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setOpenIndex(null);
      closeTimerRef.current = null;
    }, 80);
  };

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  const mainLinks = [
    {
      label: "Geschichte",
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
    <>
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
                <Link to={link.to}>{link.label}</Link>
                {link.children && (
                  <div className={`submenu ${openIndex === index ? "is-open" : ""}`} onMouseEnter={clearCloseTimer} onMouseLeave={scheduleClose}>
                    {link.children.map((child) => (
                      <div key={child.label}>
                        <Link to={child.to}>{child.label}</Link>
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
        <span>Download</span>
        <Link to={"/download"}></Link>
      </button>
    </>
  );
}
