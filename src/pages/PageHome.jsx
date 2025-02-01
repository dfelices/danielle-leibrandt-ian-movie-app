import { useState, useEffect } from "react";
// import Header from '../components/Header'
// import Footer from '../components/Footer'
import Movies from "../components/Movies";
// import MovieCard from "../components/MovieCard";
import { getPopular, getUpcoming } from "../utilities/api";
import HeroSlider from "../components/HeroSlider";

// Get API's for the movies 
import { getPopular, getUpcoming, getTopRated, getNowPlaying } from '../utilities/api';

//Page style CSS
import '../styles/PageHome.css';

// Library utilities { Swiper, Tabs }
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";

import 'swiper/css';
import 'swiper/css/pagination';
<<<<<<< Updated upstream
=======
import 'react-tabs/style/react-tabs.css';
>>>>>>> Stashed changes

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
    if (!movieList || movieList.length === 0)
      return [];
    // Use the [...movelist] to create a copy, returns a negative or positive number to ensure random sorting
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
