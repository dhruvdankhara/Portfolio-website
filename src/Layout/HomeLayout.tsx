import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-52 md:pt-32">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
