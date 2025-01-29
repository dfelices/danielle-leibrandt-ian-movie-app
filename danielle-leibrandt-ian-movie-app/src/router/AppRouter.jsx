function AppRouter(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/favorites" element={<PageFavorites />} />
                <Route path="/about" element={<PageAbout />} />
                <Route path="/movie/:id" element={<PageMovie />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter;