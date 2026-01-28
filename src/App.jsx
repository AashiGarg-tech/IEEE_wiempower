import HeroPage from "./components/HeroPage";
import FAQ from "./components/FAQ";
import TracksPage from "./components/TracksPage";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import Judges from "./components/Judges";

// import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <About />
      <Schedule />
      <TracksPage />
      <Events />
      <Judges />
      <FAQ />
      <Footer />
      {/*<Sponsors />*/}
    </>
  );
}
export default App;
