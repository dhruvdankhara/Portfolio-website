import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, BookOpen } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-[#1A1F2C]/80 backdrop-blur-md" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between flex-col md:flex-row gap-4">
          <Link
            to="/"
            className="text-3xl font-bold text-white hover:text-bento-accent transition-colors"
          >
            DHRUV
          </Link>

          <div className="glass-morphism p-1.5 rounded-full shadow-glow">
            <div className="flex space-x-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center text-white transition-all duration-300 px-4 py-2 rounded-full ${
                    isActive
                      ? "bg-bento-accent/20 text-bento-accent"
                      : "hover:bg-bento-hover hover:text-bento-accent"
                  }`
                }
              >
                <Home className="mr-2 h-4 w-4" />
                <span>Home</span>
              </NavLink>

              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  `flex items-center text-white transition-all duration-300 px-4 py-2 rounded-full ${
                    isActive
                      ? "bg-bento-accent/20 text-bento-accent"
                      : "hover:bg-bento-hover hover:text-bento-accent"
                  }`
                }
              >
                <BookOpen className="mr-2 h-4 w-4" />
                <span>Blogs</span>
              </NavLink>
            </div>
          </div>

          <span className="hidden md:block hover:text-bento-accent text-white">
            <a href="#contact">Contact</a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
