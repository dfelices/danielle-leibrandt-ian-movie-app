import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHome from "../pages/PageHome";
import PageMovie from "../pages/PageMovie";
import PageAbout from '../pages/PageAbout';
import PageFavorites from "../pages/PageFavorites";
import PageNoFavorites from "../pages/PageNoFavorites";
import { GlobalProvider } from "../context/GlobalContext";

function AppRouter() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Header />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/pagemovie/:id" element={<PageMovie />} />
        <Route path="/favorites" element={<PageFavorites />} />
        <Route path="/no-favorites" element={<PageNoFavorites />} />
        <Route path="/about" element={<PageAbout />} />
      </Routes>
      <Footer />
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default AppRouter;
