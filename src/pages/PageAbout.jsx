import '../styles/PageAbout.css';
import tmdbLogo from '../media/tmdb-logo.svg';

function About() {

    return (
        <div className="about-page">
            <div className="about-header">
                <h1>moo.v</h1>
                <h2>Where Movies Come Alive</h2>
            </div>
            <div className="about-text">
                <p>At moo.v, we believe that movies are more than just moving images—they are a journey through time, emotions, and imagination. Inspired by the golden age of 1930s movie theaters and the immersive experience of modern cinemas, we have crafted a space where you can truly dive into movies and dive into stories.

                    We live in time, just as cinema does. Every frame tells a story—capturing the past, reflecting the present, and shaping the future. Whether you're a lover of timeless classics or a modern cinephile, moo.v is your gateway to unforgettable cinematic experiences.

                    Founded in 2024, moo.v pushes the boundaries of web design to create a unique and immersive movie discovery platform. We blend cutting-edge technology with intuitive functionality, ensuring that finding, rating, and reviewing films is as exciting as watching them. Our sleek, state-of-the-art interface transforms movie browsing into an adventure, making every visit a cinematic experience in itself.

                    Step into the world where movies come alive—welcome to moo.v.</p>
            </div>
            <div className="tmdb-text">
                <img src={tmdbLogo} alt="tmdb-logo" />
                <p>This product uses the TMDb API but is not endorsed or certified by TMDb</p>
            </div>
        </div>
    )
}

export default About;