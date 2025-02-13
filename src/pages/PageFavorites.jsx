import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "../components/MovieCard";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../styles/PageFavorites.css";

const PageFavorites = () => {
  // Access favorites array and remove function from global context
  const { favorites, removeFavorite } = useContext(GlobalContext);
  // Hook for programmatic navigation
  const navigate = useNavigate();
  // State to track page exit animation
  const [isExiting, setIsExiting] = useState(false);

  // Effect hook to handle empty favorites state
  useEffect(() => {
    if (favorites.length === 0) {
      // Trigger exit animation
      setIsExiting(true);
      // Navigate to no-favorites page after animation completes
      setTimeout(() => {
        navigate("/no-favorites");
      }, 300); // Duration matches CSS transition
    }
  }, [favorites, navigate]); // Re-run when favorites or navigate changes

  // Handler for removing movies from favorites
  const handleRemoveFavorite = (movie) => {
    removeFavorite(movie);
  };

  return (
    <>
      {/* Main container with conditional exit animation class */}
      <div className={`favorites-page ${isExiting ? "page-exit" : ""}`}>
        <h1 className="fave-header">Favorites</h1>
        {/* Container for animated movie grid */}
        <TransitionGroup className="movie-grid">
          {/* Map through favorites array and render each movie */}
          {favorites.map((movie) => (
            // Wrap each movie card in transition component
            <CSSTransition key={movie.id} timeout={300} classNames="fade">
              <MovieCard
                movie={movie}
                onUnfavorite={() => handleRemoveFavorite(movie)}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </>
  );
};

export default PageFavorites;
