import "./App.css";
import Header from "./components/header";
import AboutUs from "./components/about-us";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Skills from "./components/skills";
import CurrentProjects from "./components/current-projects";
import Hobbies from "./components/hobbies";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <artivle>
        <section>
          <AboutUs />
        </section>

        <section id="mi-experiencia">
          <Experience />
        </section>

        <section id="lo-que-se">
          <Skills />
        </section>

        <section id="proyectos">
          <Projects />
        </section>

        <section id="contacto">
          <Contact />
        </section>

        <section>
          <CurrentProjects />
        </section>

        <section>
          <Hobbies />
        </section>
      </artivle>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
