import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import { getMovies, getMovieCast, getTrailer } from "../utilities/api";
import { URL_IMAGE } from "../globals/globals";
import { formatRating, formatRuntime, formatReleaseDate } from "../utilities/toolbelt";

const PageMovie = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        // Fetch movie details
        getMovies(id)
            .then(data => {
                setMovie(data);
            })
            .catch(error => {
                console.log('Error fetching movie details:', error);
            });
        // Fetch movie trailer informations
        getTrailer(id)
            .then(data => {
                setTrailer(data);
            })
            .catch(error => {
                console.log('Error fetching trailer:', error);
            });

        // Fetch movie casting informations
        getMovieCast(id)
            .then((data) => {
                setCast(data.cast);
            })
            .catch((error) => {
                console.log("Error fetching movie cast:", error);
            });
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="page-header">
                <h1>{movie.title}</h1>
            </div>
            <div className="single-movie-container">
                <img
                    className="single-movie-poster"
                    src={`${URL_IMAGE}w185/${movie.poster_path}`}
                    alt={`${movie.title} poster`} />
                <div className="single-movie-info">
                    <p>{formatReleaseDate(movie.release_date)}</p>
                    <ul className="single-movie-genre">
                        {movie.genres && movie.genres.map((genre, index) => (
                            <li key={index}>{genre.name}</li>
                        ))}
                    </ul>
                    <p>{formatRuntime(movie.runtime)}</p>
                    <div className="trailer-section">
                        {trailer ? (
                            <a
                                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="trailer-button"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                    <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                                </svg>
                            </a>
                        ) : (
                            <p>No trailer available.</p>
                        )}
                        <p>{formatRating(movie.vote_average)}</p>
                    </div>
                    <p>{movie.overview}</p>
                    {/* Casting List */}
                    <div className="movie-cast">
                        <h3>Cast</h3>
                        <div className="cast-list">
                            {cast.length > 0 ? (
                                cast.slice(0, 10).map((actor) => (
                                    <div key={actor.id} className="actor-card">
                                        <img
                                            className="actor-image"
                                            src={
                                                actor.profile_path
                                                    ? `${URL_IMAGE}w185/${actor.profile_path}`
                                                    : "https://via.placeholder.com/185x278.png?text=No+Image"
                                            }
                                            alt={actor.name}
                                        />
                                        <p>{actor.name}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No cast information available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageMovie;