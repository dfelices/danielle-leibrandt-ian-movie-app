import React from "react";
import { URL_IMAGE } from "../globals/globals";

// HeroSlider receives a prop called movie If movie is null or undefined return div
const HeroSlider = ({ movie }) => {
    if (!movie) {
        return <div className="hero-movie-placeholder">No movie selected</div>;
    }

    return (
        // Get the hero images from the URL
        <div className="hero-slider">
            <img
                className="hero-movie-image"
                src={`${URL_IMAGE}/w1280/${movie.backdrop_path}`}
                alt={`${movie.title} poster`}
            />
            <div className="hero-movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p className="hero-movie-rating">
                    Rating: {movie.vote_average.toFixed(1)}
                </p>
            </div>
        </div>
    );
};

export default HeroSlider;