import { useState, useEffect } from "react";
import { getPopular } from "../utilities/api";

function PageHome() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopular()
      .then((data) => {
        console.log(data);
        setPopularMovies(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
}

export default PageHome;
