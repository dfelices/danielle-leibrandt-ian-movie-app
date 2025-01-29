import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavorites from '../pages/PageFavorites';



function AppRouter(){
    return(
        <BrowserRouter>
            <Header />
            <Nav />
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/favorites" element={<PageFavorites />} />
                <Route path="/about" element={<PageAbout />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter;