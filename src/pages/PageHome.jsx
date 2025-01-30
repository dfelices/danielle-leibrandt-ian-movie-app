import { useState, useEffect } from "react";
// import Header from '../components/Header'
// import Footer from '../components/Footer'
import Movies from "../components/Movies";
// import MovieCard from "../components/MovieCard";
import HeroSlider from "../components/HeroSlider";

// Swiper utilities
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import { getPopular, getUpcoming, getTopRated, getNowPlaying } from "../utilities/api";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs"
import 'react-tabs/style/react-tabs.css'

function PageHome() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
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

    getTopRated()
      .then((data) => {
        setTopRatedMovies(data.results);
      })
      .catch((error) => {
        alert(error);
      });

    getNowPlaying()
      .then((data) => {
        setNowPlayingMovies(data.results);
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
      <h1>Home Page</h1>
      <Tabs>
        <TabList>
          <Tab>Popular</Tab>
          <Tab>Top Rated</Tab>
          <Tab>Now Playing</Tab>
          <Tab>Upcoming</Tab>
        </TabList>
        <TabPanel>
          <h2>Popular Movies</h2>
          <Movies title="Popular Movies" movies={popularMovies}/>
        </TabPanel>
        <TabPanel>
          <h2>Top Rated</h2>
          <Movies title="Top Rated Movies" movies={topRatedMovies}/>
        </TabPanel>
        <TabPanel>
          <h2>Now Playing</h2>
          <Movies title="Now Playing Movies" movies={nowPlayingMovies}/>
        </TabPanel>
        <TabPanel>
          <h2>Upcoming Movies</h2>
          <Movies title="Upcoming Movies" movies={upcomingMovies}/>
        </TabPanel>
      </Tabs>
      {/* <Footer /> */}
    </>
  )
}

export default PageHome;