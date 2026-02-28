import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Properties", path: "/property" },
    { name: "About Us", path: "/about" },
    { name: "Blogs", path: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "h-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800"
          : "h-24 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            alt="Arambh Logo"
            className="h-10 w-auto"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-g6tpM3eN1mxU-DXvjpU9CZIRODTmXn4vXLN99kVrQn8wQpfTqKfI72eGPWIKR_2NQDpPFUJTIKXr6NBvIlh_d1ywKbqAqtMisXDWcPBisFxi3zhPKOKWlWoDOLBzaPTaz76Hh6lbu0kbj-ANfFeaoHv3NRCkBS6p93R-cD6w5lgQotQAELUPsiRP03FUN5WYkxo-6NJ6BKd9OMMzhHpgVWiOG-QOlk0wVRxHTWPZlkeL_7fY8tk-08s2ThG9oINImh5HhhnOWws"
          />
          <span className="text-xl font-bold uppercase text-[#1a4a7c] dark:text-white hidden md:block">
            ARAMBH PROPERTIES
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-[#76b900]"
                    : "text-slate-700 dark:text-slate-200 hover:text-[#1a4a7c]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="px-6 py-2.5 bg-[#1a4a7c] text-white rounded-full font-bold text-sm"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[100] md:hidden transition-all duration-500 ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 bottom-0 w-80 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-8 flex flex-col gap-8">
            <button onClick={() => setIsMenuOpen(false)}>Close</button>

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-bold text-[#1a4a7c] dark:text-white"
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 bg-[#1a4a7c] text-white p-3 rounded-lg text-center"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;