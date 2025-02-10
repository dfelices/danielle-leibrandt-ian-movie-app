import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/PageNoFavorites.css";

const PageNoFavorites = () => {
  return (
    <>
      <Header />
      <div className="no-favorites-page">
        <h1>No Favorites Yet</h1>
        <p>Start exploring movies and add some to your favorites!</p>
        <Link to="/" className="explore-link">
          Explore Movies
        </Link>
      </div>
    </>
  );
};

export default PageNoFavorites;
