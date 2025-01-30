import "../styles/Movies.css"
import "../globals/globals.js"
import MovieCard from "./MovieCard.jsx"

function Movies({title, movies}){
    
    return(
        <>
            <div className="movies">
                <h1>{title}</h1>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie}/>
                    )
                    )}
            </div>
        </>
    )
}

export default Movies