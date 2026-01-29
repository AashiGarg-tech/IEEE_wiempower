import Navbar from "./components/navbar";
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
      <div id = "about"><About /> </div>
      <div id= "sponsors"><Sponsors /> </div>
      <div id ="schedule"><Schedule /></div>
      <div id= "tracks"><TracksPage /></div>
      <div id = "events"><Events /></div>
      <div id ="faq"><FAQ /></div>
      <Footer />
    </>


  );
}
export default App;
