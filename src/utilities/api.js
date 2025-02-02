import {
  endPointNowPlaying,
  endPointPopular,
  endPointSearch,
  endPointTopRated,
  endPointUpcoming,
  REGION
} from "../globals/globals";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function getPopular(adultSearch) {
  return fetch(`${endPointPopular}?api_key=${API_KEY}&include_adult=${adultSearch}&language=en-US&${REGION}&page=1`)
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

function getNowPlaying(adultSearch) {
  return fetch(`${endPointNowPlaying}?api_key=${API_KEY}&include_adult=${adultSearch}&language=en-US&${REGION}&page=1`)
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

function getTopRated(adultSearch) {
  return fetch(`${endPointTopRated}?api_key=${API_KEY}&include_adult=${adultSearch}&language=en-US&page=1`)
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

function getUpcoming(adultSearch) {
  return fetch(`${endPointUpcoming}?api_key=${API_KEY}&include_adult=${adultSearch}&language=en-US&${REGION}&with_release_type=2`)
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
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
      throw error;
    })
}

// Function to get a movie genre 
function getMovieGenre() {
  return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch genres');
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
      throw error;
    })
}

// Function to get a movie trailer 
function getTrailer(movieId) {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching trailer:');
      }
      return response.json();
    })
    .then((data) => {
      if (data.results && data.results.length > 0) {
        return data.results.find(video => video.type === 'Trailer');
      }
      return null;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    })
}

function getMovieCast(movieId) {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching movie cast data");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching movie cast:", error);
      throw error;
    });
}

export { getPopular, getTopRated, getUpcoming, getNowPlaying, getMovies, getMovieGenre, getTrailer, getMovieCast };

// {
//   "change_keys": [
//     "adult",
//     "air_date",
//     "also_known_as",
//     "alternative_titles",
//     "biography",
//     "birthday",
//     "budget",
//     "cast",
//     "certifications",
//     "character_names",
//     "created_by",
//     "crew",
//     "deathday",
//     "episode",
//     "episode_number",
//     "episode_run_time",
//     "freebase_id",
//     "freebase_mid",
//     "general",
//     "genres",
//     "guest_stars",
//     "homepage",
//     "images",
//     "imdb_id",
//     "languages",
//     "name",
//     "network",
//     "origin_country",
//     "original_name",
//     "original_title",
//     "overview",
//     "parts",
//     "place_of_birth",
//     "plot_keywords",
//     "production_code",
//     "production_companies",
//     "production_countries",
//     "releases",
//     "revenue",
//     "runtime",
//     "season",
//     "season_number",
//     "season_regular",
//     "spoken_languages",
//     "status",
//     "tagline",
//     "title",
//     "translations",
//     "tvdb_id",
//     "tvrage_id",
//     "type",
//     "video",
//     "videos"
//   ],
//   "images": {
//     "base_url": "http://image.tmdb.org/t/p/",
//     "secure_base_url": "https://image.tmdb.org/t/p/",
//     "backdrop_sizes": [
//       "w300",
//       "w780",
//       "w1280",
//       "original"
//     ],
//     "logo_sizes": [
//       "w45",
//       "w92",
//       "w154",
//       "w185",
//       "w300",
//       "w500",
//       "original"
//     ],
//     "poster_sizes": [
//       "w92",
//       "w154",
//       "w185",
//       "w342",
//       "w500",
//       "w780",
//       "original"
//     ],
//     "profile_sizes": [
//       "w45",
//       "w185",
//       "h632",
//       "original"
//     ],
//     "still_sizes": [
//       "w92",
//       "w185",
//       "w300",
//       "original"
//     ]
//   }
// }