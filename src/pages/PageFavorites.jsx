import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";
import "../styles/PageFavorites.css";

const PageFavorites = () => {
  const { favorites, removeFavorite } = useContext(GlobalContext);

  return (
    <>
      <Header />
      <div className="favorites-page">
        <h1>Favorites</h1>
        {favorites.length === 0 ? (
          <p>No favorite movies added yet.</p>
        ) : (
          <div className="movie-grid">
            {favorites.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onUnfavorite={() => removeFavorite(movie)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PageFavorites;
