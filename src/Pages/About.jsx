import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const About = () => {
  // Simple scroll reveal logic using Intersection Observer
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".reveal");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-[#0f172a] transition-colors duration-500">
        {/* Header / Hero Section */}
        <header className="relative py-28 md:py-40 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80"
              className="w-full h-full object-cover opacity-40 dark:opacity-20"
              alt="Office background"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e]/80 to-white dark:to-[#0f172a]"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto reveal transition-all duration-1000 opacity-0 translate-y-10">
            <h1 className="font-serif text-5xl md:text-8xl font-bold text-[#0c4a6e] dark:text-white mb-6">
              Our Legacy of Trust
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light max-w-2xl mx-auto italic leading-relaxed">
              "Providing the foundation for your future, one luxury residence at
              a time."
            </p>
          </div>
        </header>

        {/* Story Section */}
        <section className="py-20 px-4 reveal transition-all duration-1000 opacity-0 translate-y-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-emerald-500/10 rounded-3xl blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>
                <img
                  alt="Luxury modern villa"
                  className="relative rounded-3xl shadow-2xl object-cover w-full h-[400px] md:h-[600px]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9TqZ1DEe8hklIOzG-HWmB7tDVSOyjuiUlGpWExCOUpJoM5dqOBbydpupvdUrmkCqTe5qg1CrfpF99ENlOsK7zlJA1bLVCdcM--M_MB-7YNG6D82XucRXaKJBL0WdNGeMRFMb4IRPt4xEcThqzOZYjgwG1S9eT8oOwOs_kpyadfe6GYP_HxONmEhN3S0YluVGDMvxj1yDN1hVli06ZnkDIdo9WXiHQlglTJExjLsquUlU8diENPINRAGXB65VSBAkn5paAHKlkLSo"
                />
              </div>

              <div className="space-y-8">
                <div>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-[0.3em] uppercase text-xs">
                    Our Story
                  </span>
                  <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#0c4a6e] dark:text-white mt-4">
                    A Journey Defined <br /> by Excellence
                  </h2>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  Founded with a vision to redefine the real estate landscape,
                  Arambh Properties has grown from a boutique firm into a
                  cornerstone of trust in the luxury property market. We believe
                  a home is an inheritance of peace and a statement of success.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="flex items-center gap-3">
                    {/* <span className="material-symbols-outlined text-emerald-500 text-3xl">verified</span> */}
                    <span className="font-semibold dark:text-white">
                      Licensed Broker
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* <span className="material-symbols-outlined text-emerald-500 text-3xl">workspace_premium</span> */}
                    <span className="font-semibold dark:text-white">
                      Luxury Specialist
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[#0c4a6e] dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
              {[
                { label: "Properties Sold", value: "500+" },
                { label: "Happy Clients", value: "1.2k" },
                { label: "Years Experience", value: "15+" },
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="font-serif text-6xl font-bold text-emerald-400">
                    {stat.value}
                  </div>
                  <div className="text-sm uppercase tracking-[0.2em] font-medium opacity-70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 px-4 bg-slate-50 dark:bg-slate-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-800 p-12 rounded-[2.5rem] shadow-sm border-b-8 border-[#0c4a6e] group hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-[#0c4a6e]/10 rounded-2xl flex items-center justify-center mb-8 text-[#0c4a6e] group-hover:bg-[#0c4a6e] group-hover:text-white transition-colors">
                  {/* <span className="material-symbols-outlined text-4xl">flag</span> */}
                </div>
                <h3 className="font-serif text-3xl font-bold mb-6 dark:text-white">
                  Our Mission
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-light">
                  To empower our clients through transparent, data-driven real
                  estate solutions while maintaining the highest standards of
                  professional ethics and personalized service.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-12 rounded-[2.5rem] shadow-sm border-b-8 border-emerald-500 group hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  {/* <span className="material-symbols-outlined text-4xl">visibility</span> */}
                </div>
                <h3 className="font-serif text-3xl font-bold mb-6 dark:text-white">
                  Our Vision
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-light">
                  To be the most trusted name in premium real estate, setting
                  the benchmark for luxury living and transformative property
                  investment across the region.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Message */}
        <section className="py-24 px-4 reveal transition-all duration-1000 opacity-0 translate-y-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100 dark:border-slate-800">
              <div className="md:w-2/5 relative h-80 md:h-auto">
                <img
                  alt="Founder"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  // src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOpRLL04Sr4wf5MepO24IzIxrCwK0-3kWLfZGoXKhrPGgVzh0h6zo3Ff4dVimxQKvNEnNuPrnvJoShgt_4-1zptrDG7poA2-xi21rqUk6ymYvX-yKHaPDOO0RUZMyaKm7pTxDUkWQ-XKBm0bCp2MTZrx8T4ff3Rl0nBc5vHb42QsFys20JdAzQ5P6n2NFDs6GVoysdQklDjVEyLxat2gjAEiohmgE3_ls9F9ZxplUNOzvPnjuQqNFMD1GWxcwDwS4wIashBxfG0Bk"
                />
              </div>
              <div className="md:w-3/5 p-10 md:p-20 flex flex-col justify-center bg-white dark:bg-slate-900">
                <span className="material-symbols-outlined text-8xl text-slate-100 dark:text-slate-800 absolute top-10 right-10 -z-0">
                  format_quote
                </span>
                <div className="relative z-10">
                  <h4 className="text-[#0c4a6e] dark:text-white font-serif text-3xl md:text-4xl font-bold mb-8">
                    A Message From <br /> Our Founder
                  </h4>
                  <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-300 italic font-light leading-relaxed mb-10">
                    "At Arambh Properties, we don't just sell real estate; we
                    build legacies. Our success is measured not by the square
                    footage we trade, but by the trust our clients place in us."
                  </p>
                  <div>
                    <p className="font-serif text-2xl font-bold text-[#0c4a6e] dark:text-white">
                      Manoj
                    </p>
                    <p className="text-emerald-600 font-bold tracking-widest uppercase text-xs mt-1">
                      Founder & CEO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
