import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <div className="mx-auto max-w-7xl p-3 md:p-5">
        <div className="flex flex-col md:gap-5">
          <Navbar />
          <Hero />
          <TechStack />
          <Project />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
