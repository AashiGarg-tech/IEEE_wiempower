import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage";
import About from "./components/About";
import Schedule from "./components/Schedule";
import TracksPage from "./components/TracksPage";
import Events from "./components/Events";
import Sponsors from "./components/Sponsors";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <About />
      <Sponsors />
      <Schedule />
      <TracksPage />
      <Events />
      <FAQ />
      <Footer />
    </>


  );
}
export default App;
