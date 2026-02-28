import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const CategoryCard = ({
  icon,
  title,
  description,
  features,
  accentColor,
  linkText,
}) => (
  <div className="service-card group relative bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
    <div
      className={`inline-flex items-center justify-center w-16 h-16 mb-8 rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${accentColor}`}
    >
      <span className="material-icons-outlined text-3xl">{icon}</span>
    </div>

    <h3 className="text-2xl font-serif font-bold mb-4 text-[#113c6d] dark:text-white">
      {title}
    </h3>

    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-light">
      {description}
    </p>

    <ul className="space-y-3 mb-10">
      {features.map((feature, idx) => (
        <li
          key={idx}
          className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-500 font-medium"
        >
          {/* <span className="material-icons-outlined text-[#6fb932] text-lg">check_circle</span> */}
          {feature}
        </li>
      ))}
    </ul>

    <a
      href="#"
      className="inline-flex items-center font-bold text-[#113c6d] dark:text-[#6fb932] hover:gap-3 transition-all duration-300 group/link"
    >
      {linkText || "Learn More"}
      <span className="material-icons-outlined text-sm ml-2 group-hover/link:translate-x-1 transition-transform">
        arrow_forward
      </span>
    </a>
  </div>
);

const Services = () => {
  const serviceCategories = [
    {
      icon: "home_work",
      title: "Buying Assistance",
      description:
        "Personalized property curation tailored to your lifestyle and investment goals in Mumbai’s prime locations.",
      features: [
        "Exclusive inventory access",
        "Market valuation reports",
        "Expert negotiation",
      ],
      accentColor:
        "bg-[#113c6d]/10 text-[#113c6d] dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      icon: "sell",
      title: "Selling Assistance",
      description:
        "Strategic marketing and premium staging to ensure your property stands out to high-net-worth individuals.",
      features: [
        "Professional photography",
        "Targeted digital ads",
        "Seamless closing process",
      ],
      accentColor: "bg-[#6fb932]/10 text-[#6fb932]",
      linkText: "List Property",
    },
    {
      icon: "key",
      title: "Rental Management",
      description:
        "Complete peace of mind for landlords. We handle tenant vetting, rent collection, and maintenance.",
      features: [
        "Tenant vetting services",
        "24/7 maintenance support",
        "Transparent accounting",
      ],
      accentColor: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: "insights",
      title: "Investment Consulting",
      description:
        "Data-driven insights for real estate portfolios. We identify high-yield opportunities and growth sectors.",
      features: [
        "ROI analysis & forecasting",
        "Diversification strategies",
        "Off-market opportunities",
      ],
      accentColor: "bg-amber-500/10 text-amber-500",
    },
  ];

  return (
    <>
      <Navbar />
      <section
        id="services"
        className="py-24 bg-[#fcfcfd] dark:bg-[#0a1120] transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] text-[#6fb932] uppercase bg-[#6fb932]/10 rounded-full">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#113c6d] dark:text-white mb-6">
              Comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#113c6d] to-[#6fb932] dark:from-blue-400 dark:to-[#6fb932]">
                Property Solutions
              </span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-light">
              From legal hurdles to high-stakes investments, we provide the
              clarity and trust required to navigate Mumbai's dynamic real
              estate landscape.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {serviceCategories.map((service, index) => (
              <CategoryCard key={index} {...service} />
            ))}
          </div>

          {/* Legal & CTA Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Legal Card */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/3">
                <div className="w-16 h-16 bg-purple-500/10 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-icons-outlined text-4xl">
                    gavel
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 dark:text-white">
                  Legal & Compliance
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Ensuring every transaction is legally sound and fully
                  documented through expert vetting.
                </p>
              </div>

              <div className="md:w-2/3 grid grid-cols-2 gap-4">
                {[
                  {
                    t: "Property Clearance",
                    d: "Title searches & history checks.",
                  },
                  {
                    t: "Registration",
                    d: "Deed handling & local formalities.",
                  },
                  { t: "Agreement Drafting", d: "Customized legal contracts." },
                  {
                    t: "RERA Compliance",
                    d: "Ensuring adherence to guidelines.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl group hover:bg-[#113c6d] transition-colors duration-300"
                  >
                    <h4 className="font-bold text-[10px] mb-1 text-[#113c6d] dark:text-blue-300 uppercase tracking-widest group-hover:text-white">
                      {item.t}
                    </h4>
                    <p className="text-[11px] text-slate-500 group-hover:text-blue-100 font-light leading-snug">
                      {item.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-[#113c6d] dark:bg-[#6fb932] p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center text-white shadow-xl shadow-[#113c6d]/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

              <h3 className="text-3xl font-serif font-bold mb-4 relative z-10">
                Start Your Journey
              </h3>
              <p className="text-blue-100 dark:text-slate-900 mb-8 font-light relative z-10">
                Get a free consultation and property valuation report today.
              </p>
              <button className="bg-[#6fb932] dark:bg-[#113c6d] hover:scale-105 transition-all py-4 px-10 rounded-full font-bold shadow-lg relative z-10">
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
