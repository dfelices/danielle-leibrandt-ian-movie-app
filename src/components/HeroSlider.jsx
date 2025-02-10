import React from 'react';
import { URL_IMAGE } from '../globals/globals';
import { formatReleaseDate } from '../utilities/toolbelt';
import '../styles/base.css';
import '../styles/HeroSlider.css';
import { useNavigate } from 'react-router-dom';

// HeroSlider receives a prop called movie If movie is null or undefined return div
const HeroSlider = ({ movie }) => {

    const navigate = useNavigate();

    if (!movie) {
        return <div className="hero-movie-placeholder">No movie selected</div>;
    }

    // Move based on the ID of the selected movie
    const handleMoreInfo = () => {
        navigate(`/movie/${movie.id}`);
    };

    return (
        // Get the hero images from the URL
        <div className="hero-slider">
            <img
                className="hero-movie-image"
                src={`${URL_IMAGE}/w1280/${movie.backdrop_path}`}
                alt={`${movie.title} poster`}
            />
            <div className='hero_movie_title'>
                <h2>{movie.title}</h2>
            </div>
            <div className="hero-movie-info">
                <h3 className='hero_release_date'>
                    {formatReleaseDate(movie.release_date)}</h3>
                <p className='hero_overview'>
                    {movie.overview}</p>
                <button className="moreinfo_btn" onClick={handleMoreInfo}>More Info</button>
            </div>
        </div>
    );
};

export default HeroSlider;