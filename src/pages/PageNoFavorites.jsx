import { Link } from "react-router-dom";
import "../styles/PageNoFavorites.css";

const PageNoFavorites = () => {
  return (
    <>
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
