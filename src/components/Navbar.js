import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useState } from "react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleClick = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <>
      <div className="navbar">
        <Link className="logo" to="/">
          <div>Logo</div>
        </Link>
        <div className={toggle ? "menu" : "menuOff"}>
          <ul className="menus">
            <li>
              <NavLink end className="nonActive" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nonActive" to="/gallery">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink className="nonActive" to="/location">
                Location
              </NavLink>
            </li>
            <li>
              <NavLink className="nonActive" to="/faqs">
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink className="nonActive" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="links">
            <FontAwesomeIcon
              className="instagram"
              icon={faInstagram}
              size="2x"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/line_flower_96/",
                  "_blank"
                )
              }
            />
            <FontAwesomeIcon className="youtube" icon={faYoutube} size="2x" />
          </div>
        </div>
        <FontAwesomeIcon
          className="bars"
          icon={faBars}
          size="2x"
          onClick={toggleClick}
        />
      </div>
    </>
  );
}

export default Navbar;
