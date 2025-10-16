import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="home" className="section">
        <Home />
      </section>
      <section id="aboutMe" className="section">
        <AboutMe />
      </section>
      <section id="projects" className="section">
        <Projects />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>

      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
