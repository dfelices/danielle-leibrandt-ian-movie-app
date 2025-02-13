import "../globals/globals.js";
import "../styles/Movies.css";
import MovieCard from "./MovieCard.jsx";
import { Tab, Tabs, TabList } from "react-tabs";


function Movies({movies, selectedTab, setSelectedTab }) {
  
  return (
    <Tabs selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
      <div className="movies">
        <TabList className="tab-list">
            <Tab className="tab">popular</Tab>
            <Tab className="tab">top rated</Tab>
            <Tab className="tab">now playing</Tab>
            <Tab className="tab">upcoming</Tab>
        </TabList>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} className="movie-card" />
        ))}
      </div>
    </Tabs>
  );
}

export default Movies;