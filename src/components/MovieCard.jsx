import { useNavigate } from 'react-router-dom'
import '../styles/MovieCard.css'
import {URL_IMAGE} from "../globals/globals.js"

function MovieCard({movie}){
    // const navigate = useNavigate()
    
    return(
        <>
            <div className="movie-card">
                <img 
                    src={`${URL_IMAGE}/w342/${movie.poster_path}`} 
                    alt={movie.title} />
                    <div className="backdrop">
                        <div className="title-and-release">
                        <h2>{movie.title}</h2>
                        <p>{movie.release_date}</p>
                        </div>
                        <p>Movie Exerpt</p>
                        <div className="rating-and-favorite">
                        <p>{movie.vote_average.toFixed(1)}</p>
                        <button>❤️</button>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default MovieCard;