import React from 'react';
import { useNavigate } from 'react-router-dom';
import { URL_IMAGE } from '../globals/globals';
import { formatReleaseDate } from '../utilities/toolbelt';
import '../styles/HeroSlider.css';
import '../styles/PageHome.css';

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
                className="hero-image"
                src={`${URL_IMAGE}/w1280/${movie.backdrop_path}`}
                alt={`${movie.title} poster`}
            />
            <div className='hero-info-container'>
                <h1 className='hero-title'>
                    {movie.title}
                </h1>
                <h2 className='hero-release-date'>
                    {formatReleaseDate(movie.release_date)}
                </h2>
                <h3 className='hero-overview'>
                    {movie.overview}
                </h3>
                <button 
                    className="moreinfo-btn" 
                    onClick={handleMoreInfo}
                    >
                    More Info
                </button>
            </div>
        </div>
    );
}

export default HeroSlider;