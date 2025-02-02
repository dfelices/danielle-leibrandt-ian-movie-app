import { NavLink } from "react-router-dom";

const Nav = ({navOpen, setNavOpen}) => {
  function closeNav(e) {
    setNavOpen(false)
  }

  return (
    <nav className={`main-nav ${navOpen ? 'show' : ''}`} onClick={closeNav}>
      {navOpen? (
        <ul>
          <li>
            <NavLink to="/favorites">Faves</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
        </ul>
        ) : null }
    </nav>
  );
};

export default Nav;
