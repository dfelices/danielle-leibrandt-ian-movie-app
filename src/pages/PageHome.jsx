import { useState, useEffect } from "react";
// import Header from '../components/Header'
// import Footer from '../components/Footer'
import Movies from "../components/Movies";
// import MovieCard from "../components/MovieCard";
import { getPopular, getUpcoming, getTopRated, getNowPlaying } from "../utilities/api";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs"
import 'react-tabs/style/react-tabs.css'

function PageHome() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

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
  
  return(
    <>
      {/* <Header /> */}
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
