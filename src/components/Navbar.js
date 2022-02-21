import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="asd">
        <div className="navbar">
          <div className="logo">Logo</div>
          <ul className="menus">
            <li>Home</li>
            <li>Gallery</li>
            <li>Location</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
          <div className="links">
            <div>Insta</div>
            <div>Youtube</div>
          </div>
        </div>
        <FontAwesomeIcon className="bars" icon={faBars} />
      </div>
    </>
  );
}

export default Navbar;
