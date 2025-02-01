import React from 'react';
import { URL_IMAGE } from '../globals/globals';
import { formatReleaseDate } from '../utilities/toolbelt';
import '../styles/HeroSlider.css';

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
                <h2 className='hero_movie_title'>
                    {movie.title}</h2>
                <h3 className='hero_release_date'>
                    {formatReleaseDate(movie.release_date)}</h3>
                <p className='hero_overview'>
                    {movie.overview}</p>
                <button className="moreinfo_btn">More Info</button>
            </div>
        </div>
    );
};

export default HeroSlider;