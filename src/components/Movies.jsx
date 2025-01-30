import "../styles/Movies.css"
import "../globals/globals.js"

function Movies({title, movies}){
    return(
        <>
            <div className="movies">
                <h1>{title}</h1>
                <div className="movies-container">
                    {/* {movies.map((movie) => (


                    )
                    )} */}
                </div>
            </div>

        </>
    )
}

export default Movies