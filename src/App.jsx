import HeroPage from "./components/HeroPage";
import FAQ from "./components/FAQ";
import TracksPage from "./components/TracksPage";
import About from "./components/About";
import Schedule from "./components/Schedule";
// import TracksPage from "./components/TracksPage";
import Events from "./components/Events";
// import Judges from "./components/Judges";
// import Sponsors from "./components/Sponsors";
// import FAQ from "./components/FAQ";
// import Footer from "./components/Footer";
import Footer from "./components/navbar";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
        <div className="relative">
            {/* Transparent blurry navbar - fixed top */}
            <Navbar />

            {/* Hero page - pt-16 add for navbar space */}
            <HeroPage />
            <About />
            <Schedule />
            <TracksPage />
            {/* <Events /> */}
            <FAQ />
            {/* <Judges />
      <Sponsors />
      <Footer /> */}
        </div>
    </>


  );
}

export default App;
