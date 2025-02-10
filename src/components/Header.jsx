import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import '../styles/base.css';
import '../styles/Header.css';
import '../styles/Nav.css';


const Header = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="border">
      <header className={navOpen ? "show" : ""}>
        <div className="mobile-menu">
          <p className="logo">
            <Link to="/">
              <span className="mobile-logo">m</span>
              <span className="desktop-logo">moo.v</span>
            </Link>
          </p>
          <button
            className="btn-main-nav"
            onClick={() => {
              setNavOpen(!navOpen)
            }}
            >
            <span className="hamburger-icon">
              {navOpen? ( 
                <div className="menu-icon">
                  <img src={`images/iconmonstr-x-mark-lined-64.png`} alt="Magnifier Icon" />
                </div>

  ) : (
    <div className="close-icon">
                  <img src={`images/iconmonstr-menu-right-lined-64.png`} alt="Close Icon" />
                </div>
              )}
            </span>
            {/* <span className="sr-only">Menu</span> */}
          </button>
        </div>
        <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      </header>
    </div>
  );
};

export default Header;



{/**
 * HTML for the Hamburger icon modified from HTMl
 * found at this codepen:
 * https://codepen.io/RRoberts/pen/ZBYaJr
 */}