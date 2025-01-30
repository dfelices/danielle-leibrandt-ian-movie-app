import { useNavigate } from 'react-router-dom'
import '../styles/MovieCard.css'
import "../globals/globals.js"

function MovieCard({movie}){
    const navigate = useNavigate()

    return(
        <>
            <div className="movie-card">
                <img src={`${URL_IMAGE}d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg`} alt={movie.title} />
            </div>
        </>
    )
}

export default MovieCard

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
