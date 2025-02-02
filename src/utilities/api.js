import {
  endPointNowPlaying,
  endPointPopular,
  endPointSearch,
  endPointTopRated,
  endPointUpcoming,
} from "../globals/globals";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function getPopular() {
  console.log(API_KEY);
  return fetch(`${endPointPopular}?api_key=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

// Function to retrieve a single movie page by ID
function getMovies(movieId, adultSearch) {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&include_adult=${adultSearch}&language=en-US&${REGION}`)
  .then((response) => {
    if(!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .catch((error) => {
    console.log(error);
    throw error;
  })
}

export { getPopular, getMovies };
