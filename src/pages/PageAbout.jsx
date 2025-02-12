import "../styles/PageAbout.css";
import tmdbLogo from "../media/tmdb-logo.svg";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-page">
        <div className="about-header">
          <h1>moo.v</h1>
          <h2>Where Movies Come Alive</h2>
        </div>
        <div className="about-text">
          <p>
            At moo.v, we celebrate movies as journeys through time, emotion, and
            imagination. Inspired by 1930s theaters and modern cinemas, we’ve
            created a space to dive deep into stories. Founded in 2024, moo.v
            redefines movie discovery with cutting-edge design and intuitive
            functionality. Whether you love classics or modern films, our sleek
            platform turns browsing into an adventure. Welcome to moo.v—where
            movies come alive.
          </p>
        </div>
        <div className="tmdb-text">
          <img src={tmdbLogo} alt="tmdb-logo" />
          <p>
            This product uses the TMDb API but is not endorsed or certified by
            TMDb
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
