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

export { getPopular };
