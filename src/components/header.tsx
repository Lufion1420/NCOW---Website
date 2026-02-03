import { Link } from "react-router-dom";

export default function Header() {
  const mainLinks = {};

  return (
    <header className="header">
      <h1 className="logo">
        <Link to={`/`}>
          <img src="https://placehold.co/250x150" alt="NCOW - Logo" />
        </Link>
      </h1>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to={`/`}>Gameplay</Link>
          </li>
          <li>
            <Link to={`/`}>Items</Link>
          </li>
          <li>
            <Link to={`/`}>Terrain</Link>
          </li>
          <li>
            <Link to={`/`}>Downloads</Link>
          </li>
          <li>
            <Link to={`/`}>Guides</Link>
          </li>
          <li>
            <Link to={`/`}>Roadmap</Link>
          </li>
        </ul>
      </nav>
      <nav className="sub-nav">
        <ul>
          <li>
            <Link to={`/`}>Login</Link>
          </li>
          <li>
            <Link to={`/`}>Donations</Link>
          </li>
          <li>
            <Link to={`/`}>PLAY HERE</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
