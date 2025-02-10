import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from '../components/Header';
// import Nav from '../components/Nav';
// import Footer from '../components/Footer';
import PageHome from "../pages/PageHome";

import PageMovie from "../pages/PageMovie";
// import PageAbout from '../pages/PageAbout';
// import PageFavorites from '../pages/PageFavorites';

import PageFavorites from "../pages/PageFavorites";
import { GlobalProvider } from "../context/GlobalContext";


function AppRouter() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        {/* <Header />
            <Nav /> */}

      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/pagemovie/:id" element={<PageMovie />} />
        {/* <Route path="/favorites" element={<PageFavorites />} />
                <Route path="/about" element={<PageAbout />} /> */}
      </Routes>
      {/* <Footer /> */}

        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/favorites" element={<PageFavorites />} />
          {/* <Route path="/about" element={<PageAbout />} /> */}
        </Routes>
        {/* <Footer /> */}
      </GlobalProvider>

    </BrowserRouter>
  );
}

export default AppRouter;
