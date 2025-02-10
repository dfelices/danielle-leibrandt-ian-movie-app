import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/Nav.css';

const Nav = ({navOpen, setNavOpen}) => {
  function closeNav(e) {
    setNavOpen(false)
  }

  // State to manage visibility based on screen width
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 768);

  // Function to handle window resize
  const handleResize = () => {
    setIsWideScreen(window.innerWidth >= 768);
  };
  
  // Effect to add window resize listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`main-nav ${navOpen || isWideScreen ? 'show' : 'hide'}`} onClick={closeNav}>
          <ul className={navOpen || isWideScreen ? 'show' : 'hide'}>
            <div className="border-left">
              <li>
                <NavLink to="/favorites">faves</NavLink>
              </li>
            </div>
            <div className="border-left">
              <li>
                <NavLink to="/about">about</NavLink>
              </li>
            </div>
            <div className="border-left">
              <li>
                <NavLink to="/search">
                <div className="search-icon">
                  <img src={`images/iconmonstr-magnifier-lined-64.png`} alt="Magnifier Icon" />
                </div>
                </NavLink>
              </li>
            </div>
          </ul>
    </nav>
  );
};

export default Nav;
