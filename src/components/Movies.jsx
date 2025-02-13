import "../globals/globals.js";
import "../styles/Movies.css";
import MovieCard from "./MovieCard.jsx";
import { Tab, Tabs, TabList } from "react-tabs";


function Movies({movies, selectedTab, setSelectedTab }) {
  
  return (
    <Tabs selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
      <div className="movies">
        <TabList className="tab-list">
            <Tab className="tab">Popular</Tab>
            <Tab className="tab">Top Rated</Tab>
            <Tab className="tab">Now Playing</Tab>
            <Tab className="tab">Upcoming</Tab>
        </TabList>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} className="movie-card" />
        ))}
      </div>
    </Tabs>
  );
}

export default Movies;