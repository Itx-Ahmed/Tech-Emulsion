import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600 dark:text-white">
          <Link to="/">Logo</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center text-gray-700 dark:text-gray-200">
          <Link to="/about" className="hover:text-blue-500">
            About
          </Link>
          <Link to="/services" className="hover:text-blue-500">
            Services
          </Link>
          <Link to="/portfolio" className="hover:text-blue-500">
            Portfolio
          </Link>
          <Link to="/socialproof" className="hover:text-blue-500">
            Social Proof
          </Link>
          <Link to="/techstack" className="hover:text-blue-500">
            Tech Stack
          </Link>
          <Link to="/quote">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
              Get a Quote
            </button>
          </Link>
          <button onClick={toggleDarkMode} className="ml-2">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4 text-gray-700 dark:text-gray-200">
          <Link to="/about" className="block">
            About
          </Link>
          <Link to="/services" className="block">
            Services
          </Link>
          <Link to="/portfolio" className="block">
            Portfolio
          </Link>
          <Link to="/socialproof" className="block">
            Social Proof
          </Link>
          <Link to="/techstack" className="block">
            Tech Stack
          </Link>
          <Link to="/quote">
            <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition">
              Get a Quote
            </button>
          </Link>
          <button
            onClick={toggleDarkMode}
            className="w-full flex justify-center items-center gap-2 mt-2"
          >
            {isDark ? (
              <>
                <Sun size={20} /> Light Mode
              </>
            ) : (
              <>
                <Moon size={20} /> Dark Mode
              </>
            )}
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
