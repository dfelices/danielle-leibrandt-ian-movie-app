import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "../components/MovieCard";
import "../styles/PageFavorites.css";

const PageFavorites = () => {
  const { favorites, removeFavorite } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (favorites.length === 0) {
      navigate("/no-favorites");
    }
  }, [favorites, navigate]);

  const handleRemoveFavorite = (movie) => {
    removeFavorite(movie);
  };

  return (
    <>
      <div className="favorites-page">
        <h1>Favorites</h1>
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onUnfavorite={() => handleRemoveFavorite(movie)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PageFavorites;
