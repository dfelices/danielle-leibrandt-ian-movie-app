import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "../components/MovieCard";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../styles/PageFavorites.css";

const PageFavorites = () => {
  const { favorites, removeFavorite } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (favorites.length === 0) {
      setIsExiting(true);
      // Wait for animation to complete before navigating
      setTimeout(() => {
        navigate("/no-favorites");
      }, 300); // Match this with your CSS transition duration
    }
  }, [favorites, navigate]);

  const handleRemoveFavorite = (movie) => {
    removeFavorite(movie);
  };

  return (
    <>
      <div className={`favorites-page ${isExiting ? "page-exit" : ""}`}>
        <h1>Favorites</h1>
        <TransitionGroup className="movie-grid">
          {favorites.map((movie) => (
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
