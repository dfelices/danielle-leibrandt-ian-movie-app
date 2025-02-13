import { useState, useEffect } from "react";
import Movies from "../components/Movies";
import HeroSlider from "../components/HeroSlider";

// Get API's for the movies
import {
  getPopular,
  getUpcoming,
  getTopRated,
  getNowPlaying,
} from "../utilities/api";

//Page style CSS
import "../styles/PageHome.css";

// Library utilities { Swiper, Tabs }
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { Tabs, TabPanel } from "react-tabs";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../styles/Movies.css";
import "react-tabs/style/react-tabs.css";
import "swiper/css/effect-fade";

function PageHome() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [heroMovies, setHeroMovies] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);

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

  // Select a random movie from the "Upcoming" category as the hero movies
  function getRandomMovies(movieList, count = 3) {
    if (!movieList || movieList.length === 0) return [];
    // Use the [...movelist] to create a copy, returns a negative or positive number to ensure random sorting
    const shuffled = [...movieList].sort(() => 0.5 - Math.random());
    // Selects and returns the first count elements from the shuffled array
    return shuffled.slice(0, count);
  }

  useEffect(() => {
    if (upcomingMovies.length > 0) {
      setHeroMovies(getRandomMovies(upcomingMovies, 3));
    }
  }, [upcomingMovies]); // Run whenever upcomingMovies changes

  return (
    <>
      <div className="hero-container">
        <Swiper
          className="home-banner"
          spaceBetween={50}
          slidesPerView={1}
          speed={800} // Controls slide transition speed
          effect={"fade"} // Add fade transition
          fadeEffect={{
            crossFade: true, // Enable cross-fade between slides
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          }}
          modules={[Pagination, EffectFade, Autoplay]} // Add EffectFade module
        >
          {heroMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <HeroSlider movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

{/* React tab library applied here, when tab is selected, that list of movies is rendered */}
      <Tabs
        selectedIndex={selectedTab}
        onSelect={(index) => setSelectedTab(index)}
      >
        <TabPanel>
          <Movies
            title="Popular Movies"
            movies={popularMovies}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </TabPanel>
        <TabPanel>
          <Movies
            title="Top Rated Movies"
            movies={topRatedMovies}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </TabPanel>
        <TabPanel>
          <Movies
            title="Now Playing Movies"
            movies={nowPlayingMovies}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </TabPanel>
        <TabPanel>
          <Movies
            title="Upcoming Movies"
            movies={upcomingMovies}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </TabPanel>
      </Tabs>
    </>
  );
}

export default PageHome;
