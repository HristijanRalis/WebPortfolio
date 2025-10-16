import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element?.scrollIntoView({ behavior: "smooth" });
    }

    setOpenMenu(false);
  };
  return (
    <div className="Navbar">
      <div className="LOGO">
        <div className="LogoCircle"></div>
        <p>HR</p>
      </div>
      <nav className="Navigation">
        <ul className="NavList">
          <li>
            <button
              className="nav-list-item"
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="nav-list-item"
              onClick={() => scrollToSection("aboutMe")}
            >
              About Me
            </button>
          </li>
          <li>
            <button
              className="nav-list-item"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-list-item"
            >
              Contact
            </button>
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
              <button
                onClick={() => scrollToSection("home")}
                className="hamburger-nav-list-item"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("aboutMe")}
                className="hamburger-nav-list-item"
              >
                About Me
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="hamburger-nav-list-item"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hamburger-nav-list-item"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
