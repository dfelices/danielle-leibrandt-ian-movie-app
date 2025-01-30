import { useState, useEffect } from "react";
// import Header from '../components/Header'
// import Footer from '../components/Footer'
import Movies from "../components/Movies";
// import MovieCard from "../components/MovieCard";
import { getPopular, getUpcoming } from "../utilities/api";
import HeroSlider from "../components/HeroSlider";

// Swiper utilities
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

function PageHome() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [heroMovies, setHeroMovies] = useState([]);

  useEffect(() => {
    getPopular()
      .then((data) => {
        setPopularMovies(data.results);
      })
      .catch((error) => {
        alert(error);
      });

    getUpcoming()
      .then((data) => {
        setUpcomingMovies(data.results);
      })
      .catch((error) => {
        alert(error);
      });

  }, []);

  // Select a random movie from the "Upcoming" category as the hero movies
  function getRandomMovies(movieList, count = 3) {
    // If movieList is null, an undefined empty array, it returns [] (empty array).
    if (!movieList || movieList.length === 0)
      return [];
    // To avoid changing the original of movieList, use the [...movelist] to create a copy.
    // Returns a negative or positive number to ensure random sorting
    const shuffled = [...movieList].sort(() => 0.5 - Math.random());
    // Selects and returns the first count elements from the shuffled array
    return shuffled.slice(0, count);
  }

  useEffect(() => {
    if (upcomingMovies.length > 0) {
      setHeroMovies(getRandomMovies(upcomingMovies, 3));
    }
  }, [upcomingMovies]); // Run whenever upcomingMovies changes

  return (
    <>
      {/* <Header /> */}
      <div className="hero-container">
        <Swiper
          className="home-banner"
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {heroMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <HeroSlider movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Movies title="popular Movies" movies={popularMovies} />
      <Movies title="upcoming Movies" movies={upcomingMovies} />
      {/* <Footer /> */}
    </>
  )
}

export default PageHome;
