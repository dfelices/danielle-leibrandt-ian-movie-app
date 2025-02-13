// Import necessary React hooks and routing components
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
// Import required stylesheets
import "../styles/base.css";
import "../styles/Header.css";
import "../styles/Nav.css";

const Header = () => {
  // State to control mobile navigation menu visibility
  const [navOpen, setNavOpen] = useState(false);
  // Reference to audio element for moo sound
  const audioRef = useRef(null);
  // State to track if moo sound has been played
  const [hasPlayedSound, setHasPlayedSound] = useState(false);

  // Check if sound has been played before (persisted in localStorage)
  useEffect(() => {
    const soundPlayed = localStorage.getItem("mooSoundPlayed");
    if (soundPlayed) {
      setHasPlayedSound(true);
    }
  }, []); // Empty dependency array means this runs once on mount

  // Function to handle moo sound playback on logo hover
  const playHoverSound = () => {
    if (audioRef.current && !hasPlayedSound) {
      audioRef.current.currentTime = 0; // Reset audio to start
      audioRef.current.play();
      setHasPlayedSound(true);
      // Persist the played state in localStorage
      localStorage.setItem("mooSoundPlayed", "true");
    }
  };

  return (
    // Main header container with border
    <div className="border">
      {/* Header element with dynamic class based on nav state */}
      <header className={navOpen ? "show" : ""}>
        {/* Mobile menu container */}
        <div className="mobile-menu">
          {/* Logo section */}
          <p className="logo">
            <Link to="/">
              {/* Mobile version of logo */}
              <span className="mobile-logo">m</span>
              {/* Desktop version of logo with sound effect */}
              <span className="desktop-logo" onMouseEnter={playHoverSound}>
                moo.v
              </span>
            </Link>
          </p>

          {/* Hidden audio element for moo sound */}
          <audio ref={audioRef} preload="auto">
            <source src="/images/moo.mp3" type="audio/mpeg" />
          </audio>

          {/* Hamburger menu button for mobile */}
          <button
            className="btn-main-nav"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            {/* Icon container */}
            <span className="hamburger-icon">
              {/* Conditional rendering of menu icons based on nav state */}
              {navOpen ? (
                // X icon when menu is open
                <div className="menu-icon">
                  <img
                    src={`/images/iconmonstr-x-mark-lined-64.png`}
                    alt="Magnifier Icon"
                  />
                </div>
              ) : (
                // Hamburger icon when menu is closed
                <div className="close-icon">
                  <img
                    src={`/images/iconmonstr-menu-right-lined-64.png`}
                    alt="Close Icon"
                  />
                </div>
              )}
            </span>
            {/* Screen reader only text (currently commented out) */}
            {/* <span className="sr-only">Menu</span> */}
          </button>
        </div>

        {/* Navigation component with props for controlling mobile menu state */}
        <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      </header>
    </div>
  );
};

export default Header;
