import "../globals/globals.js";
import "../styles/Movies.css";
import MovieCard from "./MovieCard.jsx";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState, useEffect } from 'react';

function Movies({ title, movies, selectedTab, setSelectedTab }) {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1400);
  const [isTabletScreen, setIsTabletScreen] = useState(window.innerWidth >= 768 && window.innerWidth < 1200);
  
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1400);
      setIsTabletScreen(window.innerWidth >= 768 && window.innerWidth < 1200);
    };
  
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
          <>
            <MovieCard key={movies[0].id} movie={movies[0]} className="first-movie" />
            {/* {movies.length > 2 && isTabletScreen && (
              <MovieCard key={movies[1].id} movie={movies[1]} className="third-movie" />
            )} */}
            {movies.length > 3 && isLargeScreen && (
              <>
              <MovieCard key={movies[2].id} movie={movies[2]} className="second-movie" />
              <MovieCard key={movies[3].id} movie={movies[3]} className="third-movie" />
              </>
            )}
          </>
        )}

      </div>
      <div className="movies">
        {movies.slice(isLargeScreen ? 4 : isTabletScreen ? 3 : 2).map((movie) => (
          <MovieCard key={movie.id} movie={movie} className="movie-card" />
        ))}
      </div>
    </Tabs>
  );
}

export default Movies;