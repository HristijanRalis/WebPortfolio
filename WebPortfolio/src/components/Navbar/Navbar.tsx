import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);
  return (
    <div className="Navbar">
      <div className="LOGO">
        <div className="LogoCircle"></div>
        <p>HR</p>
      </div>
      <nav className="Navigation">
        <ul className="NavList">
          <li>
            <Link to="/" className="nav-list-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutMe" className="nav-list-item">
              About Me
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-list-item">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-list-item">
              {" "}
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className={`hamburger ${openMenu ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>

      <div className={`HamburgerContainer ${openMenu ? "active" : ""}`}>
        <nav className="hamburgerNavigation">
          <ul className="hamburgerList">
            <li>
              <Link to="/" className="hamburger-nav-list-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutMe" className="hamburger-nav-list-item">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hamburger-nav-list-item">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hamburger-nav-list-item">
                {" "}
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
