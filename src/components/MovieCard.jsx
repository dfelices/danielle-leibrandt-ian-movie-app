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
