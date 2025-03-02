import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

function App() {
  return (
    <>
      <div className="mx-auto max-w-7xl p-3 md:p-5">
        <div className="flex flex-col md:gap-5">
          <Navbar />
          <Hero />
          <Title title="Tech Stack" />
          <Title title="Project" />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
