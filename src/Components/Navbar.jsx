import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Properties", href: "/property" },
    { name: "About Us", href: "/about" },
    { name: "Blogs", href: "/blog" },
  ];

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
        ? "h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-800/50" 
        : "h-24 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <img
              alt="Arambh Logo"
              className="h-10 w-auto transition-transform group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-g6tpM3eN1mxU-DXvjpU9CZIRODTmXn4vXLN99kVrQn8wQpfTqKfI72eGPWIKR_2NQDpPFUJTIKXr6NBvIlh_d1ywKbqAqtMisXDWcPBisFxi3zhPKOKWlWoDOLBzaPTaz76Hh6lbu0kbj-ANfFeaoHv3NRCkBS6p93R-cD6w5lgQotQAELUPsiRP03FUN5WYkxo-6NJ6BKd9OMMzhHpgVWiOG-QOlk0wVRxHTWPZlkeL_7fY8tk-08s2ThG9oINImh5HhhnOWws"
            />
          </div>
          <div className="hidden md:block">
            <span className={`text-xl font-bold tracking-tight uppercase transition-colors ${scrolled || isDarkMode ? 'text-white' : 'text-white'}`}>
              ARAMBH PROPERTIES
            </span>
            <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#76b900]">
              Built on Trust
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#1a4a7c] dark:hover:text-[#76b900] transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#76b900] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 pl-6 border-l border-slate-200 dark:border-slate-800">
            {/* <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:shadow-md transition-all"
            >
              <span className="material-symbols-outlined !text-xl">
                {isDarkMode ? "light_mode" : "dark_mode"}
              </span>
            </button> */}

            <a
              href="/contact"
              className="px-6 py-2.5 bg-[#1a4a7c] text-white rounded-full hover:bg-[#0f2d4d] transition-all font-bold text-sm shadow-lg shadow-[#1a4a7c]/20 hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 active:scale-90 transition-transform"
          onClick={() => setIsMenuOpen(true)}
        >
          <span className="material-symbols-outlined text-slate-700 dark:text-white">
            menu
          </span>
        </button>
      </nav>

      {/* ========== PREMIUM MOBILE MENU DRAWER ========== */}
      <div
        className={`fixed inset-0 z-[100] md:hidden transition-all duration-700 ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop blur overlay */}
        <div 
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-xl transition-opacity duration-700 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu Container */}
        <div 
          className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-8 flex flex-col h-full">
            <div className="flex justify-between items-center mb-16">
              <span className="text-[10px] font-black tracking-[0.4em] text-[#76b900] uppercase">Navigation</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ transitionDelay: `${index * 70}ms` }}
                  className={`text-4xl font-serif font-bold text-[#1a4a7c] dark:text-white transition-all duration-700 ${
                    isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-auto space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                <span className="font-bold text-xs uppercase tracking-widest text-slate-400">Theme</span>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="px-4 py-2 rounded-xl bg-white dark:bg-slate-700 shadow-sm text-xs font-bold dark:text-white flex items-center gap-2"
                >
                   <span className="material-symbols-outlined !text-sm">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
                   {isDarkMode ? "Light" : "Dark"}
                </button>
              </div>

              <a
                href="#contact"
                className="block w-full text-center py-4 bg-[#1a4a7c] text-white rounded-2xl font-bold text-lg shadow-xl shadow-[#1a4a7c]/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
