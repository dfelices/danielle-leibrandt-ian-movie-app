import "../styles/MovieCard.css";
import { URL_IMAGE } from "../globals/globals.js";
import FavoriteButton from "./FavoriteButton.jsx";
import { useNavigate } from "react-router-dom";
import {
  formatReleaseDate,
  formatRating,
  getShortDescription,
} from "../utilities/toolbelt";
import { useState, useEffect, useRef } from "react";

// Component that displays a movie card with poster, rating, and interactive features
function MovieCard({ movie }) {
  // Hook for programmatic navigation between routes
  const navigate = useNavigate();
  // Format the movie rating and get corresponding color
  const rating = formatRating(movie.vote_average);
  // State to track if card is in preview mode (mobile/tablet)
  const [isActive, setIsActive] = useState(false);
  // Reference to the card element for click outside detection
  const cardRef = useRef(null);

  // Handle clicks outside the card to close preview
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle card clicks differently for mobile/desktop
  const handleClick = (e) => {
    if (window.innerWidth < 1400) {
      // Close any other open previews
      document.querySelectorAll(".movie-card.active").forEach((card) => {
        if (card !== cardRef.current) {
          card.classList.remove("active");
        }
      });

      // First click shows preview, second click navigates
      if (!isActive) {
        setIsActive(true);
      } else {
        navigate(`/movie/${movie.id}`);
      }
    } else {
      // On desktop, navigate immediately
      navigate(`/movie/${movie.id}`);
    }
  };

  return (
    <>
      <div
        ref={cardRef}
        className={`movie-card ${isActive ? "active" : ""}`}
        onClick={handleClick}
      >
        {/* Movie poster image */}
        <img src={`${URL_IMAGE}/w342/${movie.poster_path}`} alt={movie.title} />
        {/* Overlay content */}
        <div className="backdrop">
          {/* Rating and favorite button container */}
          <div className="rating-and-favorite">
            <div
              className="rating-border"
              style={{ borderColor: rating.color }}
            >
              {rating.value}
            </div>
            <FavoriteButton movie={movie} />
          </div>
          {/* Movie details */}
          <div className="title-and-release">
            <h2>{movie.title}</h2>
            <p className="release-date">
              {formatReleaseDate(movie.release_date)}
            </p>
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
