import "../styles/MovieCard.css";
import { URL_IMAGE } from "../globals/globals.js";
import FavoriteButton from "./FavoriteButton.jsx";

function MovieCard({ movie }) {
  // const navigate = useNavigate()

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
      <div className="movie-card">
        <img src={`${URL_IMAGE}/w342/${movie.poster_path}`} alt={movie.title} />
        <div className="backdrop">
          <div className="rating-and-favorite">
            <div
              className="rating-border"
              style={{ borderColor: getRatingColor(movie.vote_average) }}
            >
              {Math.round(movie.vote_average * 10)}
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

// 0
// :
// adult
// :
// false
// backdrop_path
// :
// "/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg"
// genre_ids
// :
// (4) [28, 878, 35, 10751]
// id
// :
// 939243
// original_language
// :
// "en"
// original_title
// :
// "Sonic the Hedgehog 3"
// overview
// :
// "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet."
// popularity
// :
// 4279.584
// poster_path
// :
// "/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg"
// release_date
// :
// "2024-12-19"
// title
// :
// "Sonic the Hedgehog 3"
// video
// :
// false
// vote_average
// :
// 7.9
// vote_count
// :
// 1227
