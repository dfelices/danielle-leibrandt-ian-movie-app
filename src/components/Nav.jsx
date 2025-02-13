import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "../styles/Nav.css";

const Nav = ({ navOpen, setNavOpen }) => {
  // Function to close the mobile navigation menu
  function closeNav(e) {
    setNavOpen(false);
  }

  // Responsive design: Track if screen is wider than 768px
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 768);

  // Update isWideScreen state when window is resized
  const handleResize = () => {
    setIsWideScreen(window.innerWidth >= 768);
  };

  // Add and cleanup window resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // BEGINNING OF ASSISTANCE OF COPILOT FOR SEARCH FUNCTIONALITY
  // Search functionality state management
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Controls search input visibility
  const [searchQuery, setSearchQuery] = useState(""); // Stores search input value
  const [searchResults, setSearchResults] = useState([]); // Stores API search results
  const searchRef = useRef(null); // Reference for click outside detection
  const navigate = useNavigate(); // Navigation hook for routing

  // Click outside detection to close search dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
        setSearchResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Debounced API search functionality with useEffect hook
  useEffect(() => {
    const searchMovies = async () => {
      // Only search if query is 3 or more characters
      if (searchQuery.length > 2) {
        try {
          // Fetch movies from TMDB API
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${
              import.meta.env.VITE_TMDB_API_KEY
            }&query=${searchQuery}`
          );
          const data = await response.json();
          // Limit results to first 10 movies
          setSearchResults(data.results.slice(0, 10));
        } catch (error) {
          console.error("Error searching movies:", error);
        }
      } else {
        setSearchResults([]);
      }
    };

    // Debounce search to prevent excessive API calls
    const debounceTimer = setTimeout(searchMovies, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  // Handle movie selection from search results
  const handleMovieSelect = (movieId) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
    navigate(`/movie/${movieId}`);
  };
  // END OF ASSISTANCE WITH COPILOT FOR SEARCH FUNCTIONALITY

  return (
    // Main navigation container with responsive classes
    <nav
      className={`main-nav ${navOpen || isWideScreen ? "show" : "hide"}`}
      onClick={closeNav}
    >
      <ul className={navOpen || isWideScreen ? "show" : "hide"}>
        {/* Navigation links section */}
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
        {/* Search section */}
        <div className="border-left">
          <li
            className="search-container"
            ref={searchRef}
            onClick={(e) => e.stopPropagation()} // Prevent nav from closing when clicking search
          >
            <div className="search-wrapper">
              {/* Search icon */}
              <div className="search-icon">
                <img
                  src={`/images/iconmonstr-magnifier-lined-64.png`}
                  alt="Search"
                />
              </div>
              {/* Search input field */}
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="search movies"
              />
              {/* Search results dropdown */}
              {searchResults.length > 0 && (
                <ul className="search-results">
                  {searchResults.map((movie) => (
                    <li
                      key={movie.id}
                      onClick={() => handleMovieSelect(movie.id)}
                    >
                      {movie.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
