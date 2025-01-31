import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "../styles/FavoriteButton.css";

function FavoriteButton({ movie }) {
  const { favorites, addFavorite, removeFavorite } = useContext(GlobalContext);

  // determine whether the movie is already in favorites
  const isFavorite = favorites.find((fav) => {
    return fav.id === movie.id;
  });

  function handleClick(e) {
    e.stopPropagation();
    if (isFavorite) {
      removeFavorite(movie);
    } else {
      addFavorite(movie);
    }
  }

  return <button onClick={handleClick}>{isFavorite ? "❤️" : "🤍"}</button>;
}

export default FavoriteButton;
