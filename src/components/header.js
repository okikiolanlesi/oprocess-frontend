import { useState } from "react";
import "../styles/header-styles.css";
function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="container">
      <div className="logo">
        <h3>Okikiola</h3>
      </div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>Announcements</li>
          <li>Search</li>
          <li>Profile</li>
        </ul>
        <div className="menu-btn" onClick={() => setNavOpen(!navOpen)}>
          <img src="/images/menu-icon.svg" alt="hamburger menu button" />
        </div>
      </div>
      <div
        className={`bg-blur ${navOpen ? "navOpen" : ""}`}
        onClick={() => setNavOpen(!navOpen)}
      ></div>
      <nav className={`navSlide ${navOpen ? "navOpen" : ""}`}>
        <div className="close-btn" onClick={() => setNavOpen(!navOpen)}>
          <img src="/images/close-icon.svg" alt="close menu button" />
        </div>
        <ul>
          <li>Home</li>
          <li>Announcements</li>
          <li>Search</li>
          <li>Profile</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
