import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-[#120820]">
        <Nav />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
