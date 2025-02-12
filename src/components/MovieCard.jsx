import "../styles/MovieCard.css";
import { URL_IMAGE } from "../globals/globals.js";
import FavoriteButton from "./FavoriteButton.jsx";
import { useNavigate } from "react-router-dom";
import { formatReleaseDate, formatRating } from "../utilities/toolbelt";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const rating = formatRating(movie.vote_average);

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  const getRatingColor = (rating) => {
    if (rating >= 8) return "green";
    if (rating >= 5) return "yellow";
    return "red";
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getShortDescription = (description) => {
    return description.length > 150
      ? description.substring(0, 150) + "..."
      : description;
  };

  return (
    <>
      <div className="movie-card" onClick={handleClick}>
        <img src={`${URL_IMAGE}/w342/${movie.poster_path}`} alt={movie.title} />
        <div className="backdrop">
          <div className="rating-and-favorite">
            <div
              className="rating-border"
              style={{ borderColor: rating.color }}
            >
              {rating.value}
            </div>
            <FavoriteButton movie={movie} />
          </div>
          <div className="title-and-release">
            <h2>{movie.title}</h2>
            <p className="release-date">{formatDate(movie.release_date)}</p>
            <p className="movie-excerpt">
              {getShortDescription(movie.overview)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
