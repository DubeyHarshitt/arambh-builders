import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const properties = [
  {
    id: 1,
    title: "Skyline View Penthouse",
    location: "Worli, South Mumbai",
    price: "₹ 4.50 Cr",
    beds: "3 BHK",
    sqft: "1,850",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhEaxmJ99G-9RY-2aQZPyfYEMNrED9TnSyTSPr0fS8saiYO0nvDS1AjAgMfBCErHP3yWVlH9OS6m7FAAnfB0tBfAOHEKjSj2P7bP9h4PvYEdMkZJSXm1EhEhecWc9syd2XzkQkR5qGMgbzwHdVMYUVPu-9NMToP03h9eYm4gDX5IhWG2x1VNosLu8xGRp8x29grelaxoOzlJQGbjPPStkhXd3LmXG_gi2LcHQvpJ55J2_0a4kRcUtlzgO2kYEhl8j-w8aYEJIxYOU",
    tag: "FOR SALE"
  },
  {
    id: 2,
    title: "Premium Corporate Space",
    location: "BKC, Mumbai",
    price: "₹ 2.2 Lakh/mo",
    beds: "5 Cabins",
    sqft: "2,400",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1VEvk6FsUIH-PDEeoPvswPQrx4xHsFGLL9AUF9SqIkHQG9gmzYOcAIywtqTyems1nrIGj81u3cOfdRTj2Z8Vzq01rAMS8YsSvdyLv91Ac9zhpRwCl_Any2a_kPQ2qfqSK7GJPBGTb5a4ywQsQSmIAd-D7N29HU382GUfsvqRSsUdTjYEj5Sv8zMzyYQ1ZPTiFd1WhALdhaxSEFmS3dGMPO3TDPb8bd5nMnk5O5_UXfxZ1zfTowgpTHyzwDGhkkcWcstzwsulm4eg",
    tag: "RENT"
  },
  {
    id: 3,
    title: "Beachfront Luxury Villa",
    location: "Juhu, Mumbai",
    price: "₹ 7.80 Cr",
    beds: "4 BHK",
    sqft: "3,200",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-PVs5rguYGEDPGU2i7oRJ4KVoR_uFWQ0y0bL4J5FzEg9o-S_iLV070ica8LZWL4xNQ-tDFn6Cclw3bSCM8NXECSwnVWVBNaCVKXzPt3MXXc8c_x_zgnplw-i-7qBSfgQfK1R90I2QhOVqa8fcVlqFCojoi38eA32Z562_Ekf0Gb4c_0EPc3Nn_grPCZgMQ7wAymA7iplwmsmD114OFMxxGJYlNVzsoTjCjUs4CHghp2DZjvs1tFqcj5WqGDpvKf9wmKIFAM-S5Uk",
    tag: "FOR SALE"
  }
];

const Home = () => {
  return (
    <div className="bg-white dark:bg-[#0f172a] transition-colors duration-500">
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] md:h-screen flex items-center justify-center px-4">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              alt="Mumbai Skyline" 
              className="w-full h-full object-cover scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUBtf9PcC9ZJyPfwxauLlW2P0iLf7CnWk1w5XDxmnmJgbjrjiyUYdZ2dYSXLQNIDVchRwbt3kkQY_JhA1xSYxbCfJyM9pd3xRgBwjv8oUSqS9bF7Gi_5eGKDW_yOyoOf0B6O8YE-Rq5I0HB6awdp8NtUKbdNlt8Uvczb2ldfVWnLAG3LXexPB65S19qQHALcy_IL5EumcgAqIwFFIpUuflH9O1RbXEhI8iQP65z8yEtHYVrYDXmJFIo9Z6upV1dhx6OiwhrMyh6_c" 
            />
            {/* Improved Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-[#0f172a]"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto text-center pt-20">
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold tracking-[0.3em] text-emerald-400 uppercase bg-emerald-400/10 backdrop-blur-md rounded-full border border-emerald-400/20">
              The Gold Standard of Mumbai Real Estate
            </span>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white mb-6 md:mb-8 leading-[1.1]">
              Elevate Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-100 to-emerald-400">Living Experience</span>
            </h1>
            <p className="max-w-xl md:max-w-2xl mx-auto text-base md:text-lg text-slate-300 mb-10 md:mb-12 font-light leading-relaxed px-4">
              Access Mumbai's most exclusive off-market residential and commercial properties with the city's most trusted consultancy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-6">
              <button className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-full font-bold transition-all hover:bg-emerald-500 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:-translate-y-1">
                View Listings
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all">
                Speak to Advisor
              </button>
            </div>
          </div>
        </section>

        {/* Specializations Section */}
        <section id="categories" className="py-20 md:py-32 px-4 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center md:text-left flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold dark:text-white mb-4">Our Expertise</h2>
                <p className="text-slate-500 dark:text-slate-400">Strategic real estate solutions across Mumbai's prime micro-markets.</p>
              </div>
              <div className="hidden md:block w-32 h-px bg-slate-200 dark:bg-slate-800"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {[
                { title: 'Buy Property', icon: 'account_balance_wallet', desc: 'Secure high-appreciation assets in prime Mumbai locations.' },
                { title: 'Sell Property', icon: 'trending_up', desc: 'Global marketing reach to find the right HNI buyers.' },
                { title: 'Rent / Lease', icon: 'key', desc: 'Premium luxury rentals with end-to-end management.' },
                { title: 'Investment', icon: 'analytics', desc: 'Commercial yield assets and pre-launch opportunities.' }
              ].map((item, idx) => (
                <div key={idx} className="group p-8 bg-slate-50 dark:bg-[#1e293b] rounded-[2rem] border border-transparent hover:border-emerald-500/20 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-2xl">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                    <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 dark:text-white">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Properties Grid */}
        <section id="featured" className="py-20 md:py-32 px-4 bg-slate-50 dark:bg-[#0f172a]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold dark:text-white mb-2">Curated Listings</h2>
                <p className="text-slate-500 dark:text-slate-400">Explore our exclusive selection of luxury residences.</p>
              </div>
              <button className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">View All Properties →</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {properties.map((prop) => (
                <div key={prop.id} className="group bg-white dark:bg-[#1e293b] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-3xl transition-all duration-500">
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <img src={prop.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={prop.title} />
                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[#0f172a] dark:text-white text-[10px] font-black rounded-full shadow-lg">
                      {prop.tag}
                    </div>
                    <div className="absolute bottom-6 right-6 bg-emerald-600 px-4 py-2 rounded-xl font-bold text-white shadow-xl">
                      {prop.price}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center text-slate-400 text-xs mb-4">
                      <span className="material-symbols-outlined text-sm mr-1 text-emerald-500">location_on</span>
                      {prop.location}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-6 dark:text-white group-hover:text-emerald-500 transition-colors">{prop.title}</h3>
                    <div className="flex justify-between items-center pt-6 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2 text-xs md:text-sm font-medium dark:text-slate-300">
                        <span className="material-symbols-outlined text-emerald-500">bed</span> {prop.beds}
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm font-medium dark:text-slate-300">
                        <span className="material-symbols-outlined text-emerald-500">straighten</span> {prop.sqft} ft²
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;