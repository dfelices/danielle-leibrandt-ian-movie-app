import { Link } from "react-router-dom";
import "../styles/PageNoFavorites.css";

const PageNoFavorites = () => {
  return (
    <>
      <div className="no-fave-wrapper">
        <div className="no-favorites-page">
          <h1>Uh Oh!</h1>
          <p>You haven't added any favorites</p>
          <Link to="/" className="explore-link">
            Explore Movies
          </Link>
        </div>
        <div className="kaws">
          <img src="../../images/kaws.png" alt="sad clown" />
        </div>
      </div>
    </>
  );
};

export default PageNoFavorites;
