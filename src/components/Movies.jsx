import "../globals/globals.js";
import "../styles/Movies.css";
import MovieCard from "./MovieCard.jsx";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState, useEffect } from 'react';

function Movies({ title, movies, selectedTab, setSelectedTab }) {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1200);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Tabs selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
      <div className="tabs-and-first-movie">
        <TabList className="tab-list">
            <Tab className="tab">Popular</Tab>
            <Tab className="tab">Top Rated</Tab>
            <Tab className="tab">Now Playing</Tab>
            <Tab className="tab">Upcoming</Tab>
        </TabList>
        {movies.length > 0 && (
          <MovieCard key={movies[0].id} movie={movies[0]} className="first-movie" />
        )}
        {isLargeScreen && movies.length > 1 && (
          <MovieCard key={movies[1].id} movie={movies[1]} className="second-movie" />
        )}
      </div>
      <div className="movies">
        {movies.slice(isLargeScreen ? 2 : 1).map((movie) => (
          <MovieCard key={movie.id} movie={movie} className="movie-card" />
        ))}
      </div>
    </Tabs>
  );
}

export default Movies;