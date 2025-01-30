import { useState, useEffect } from "react";
// import Header from '../components/Header'
// import Footer from '../components/Footer'
import Movies from "../components/Movies";
import MovieCard from "../components/MovieCard";
import { getPopular } from "../utilities/api";


function PageHome() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopular()
      .then((data) => {
        console.log(data)
        setPopularMovies(data.results);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  
  return(
    <>
      {/* <Header /> */}
      <h1>Home Page</h1>
      <Movies title="Popular Movies" movies={popularMovies} />
      {/* <Footer /> */}
    </>
  )
}

export default PageHome;
