
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import GalleryPage from './Components/GalleryPage';
import Banner from './Components/Banner';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/banner" element={<Banner />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
