import React, { useState, useMemo } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const PropertyCard = ({ property }) => (
  <div className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-500">
    <div className="relative h-64 overflow-hidden">
      <img
        alt={property.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        src={property.image}
      />
      {property.tag && (
        <div className="absolute top-4 left-4">
          <span
            className={`${property.tagColor || "bg-[#1b4e82]"} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-md`}
          >
            {property.tag}
          </span>
        </div>
      )}
      <button className="absolute top-4 right-4 bg-white/10 hover:bg-[#76b82a] backdrop-blur-md p-2 rounded-full transition-all duration-300 text-white border border-white/20">
        {/* <span className="material-icons-outlined text-xl">favorite_border</span> */}
      </button>
    </div>

    <div className="p-6">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-xl leading-tight group-hover:text-[#1b4e82] dark:group-hover:text-[#76b82a] transition-colors dark:text-white">
          {property.title}
        </h3>
        <div className="text-[#1b4e82] dark:text-[#76b82a] font-bold text-lg">
          {property.price}
        </div>
      </div>
      <p className="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-6">
        <span className="material-icons-outlined text-sm mr-1 text-[#76b82a]">
          location_on
        </span>
        {property.location}
      </p>

      <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-700 pt-5 mb-6">
        <div className="flex flex-col items-center gap-1 text-slate-600 dark:text-slate-400">
          {/* <span className="material-icons-outlined text-xl text-[#1b4e82]">bed</span> */}
          <span className="text-[10px] font-bold uppercase">
            {property.bhk} BHK
          </span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-600 dark:text-slate-400">
          {/* <span className="material-icons-outlined text-xl text-[#1b4e82]">square_foot</span> */}
          <span className="text-[10px] font-bold uppercase">
            {property.area} Sq.ft
          </span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-600 dark:text-slate-400">
          {/* <span className="material-icons-outlined text-xl text-[#1b4e82]">directions_car</span> */}
          <span className="text-[10px] font-bold uppercase">
            {property.parking} Park
          </span>
        </div>
      </div>

      <button className="w-full bg-[#1b4e82] hover:bg-[#0f172a] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#1b4e82]/20">
        {/* <span className="material-icons-outlined text-lg">chat_bubble_outline</span> */}
        Inquiry Now
      </button>
    </div>
  </div>
);

const Property = () => {
  const [filters, setFilters] = useState({
    location: "All",
    bhk: "All",
    budget: 100,
  });

  const propertyList = [
    {
      id: 1,
      title: "Skyview Residences",
      price: "₹4.50 Cr",
      location: "Worli, Mumbai",
      bhk: 3,
      area: "1,850",
      parking: 2,
      tag: "Featured",
      tagColor: "bg-[#1b4e82]",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDTJzdryW-rkb9o4bYlHoitPkD_lZyzDNv2-B2w33n7p6ZxVwYER82sP5pk0ovvW_dXVGCEBUkfUNULy0Z8bh1Aw6TZLQdof8JHKKSAQIBG7dyK-Uwy5xsIlod9PtG4jh931aJNNvCoNF2vvsUEXeRqi2ZqPwIYAwWS_BCpvvu9tiNYchwJrBdT4mgODsOpYiK8ye4I8Mebvn7WHbvAXEWMNazPRbQwg2Xtu-gq4cWlxfRNUl5GqpkVYkrxlRwNjCWv_Qx7SctWKF4",
    },
    {
      id: 2,
      title: "The Emerald Estate",
      price: "₹2.75 Cr",
      location: "Bandra, Mumbai",
      bhk: 2,
      area: "1,200",
      parking: 1,
      tag: "New Launch",
      tagColor: "bg-[#76b82a]",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCZOztsJl0P1yxfjLw9huRjQc5JJeWUoqvfKoe1kjhkNfdgLLp7v6MBIOu9ks_oGyxeW5Hq0dby4EMGohW2s87z0V5Z8usjmXk8tiMPmJXm78e3X1yyxTs-xfILrsSTsg8UGxwYnbRBRe1Ts74JgPXZUMwqHG-xqF1dwOGkRXuisfecCRTsEEESvrRFqH4svyjdSOUj1UZseSDZXue7DiL_kkKou-Xrw0mw4yw3dVakt3SMj66w_m2ROEvgpVdG77jIY3SaZ_iJ8Sk",
    },
    {
      id: 3,
      title: "Azure Heights",
      price: "₹8.90 Cr",
      location: "Juhu Circle, Mumbai",
      bhk: 4,
      area: "3,400",
      parking: 3,
      tag: "Premium",
      tagColor: "bg-[#1b4e82]",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDkt9SHiOQgxyCsa2q9pHyb49mZoZkEFigzv04gfzGxVWn1uf-b7hyT3tCvwBX9IQhjM3O4tJTjeZTcpTUETSItkwLYCYuh1E8CfJg2BjHhGVgHwYh3AUUTXTZNL7h4bDTcUBLsi4O1AeuAo2w2-HM_jej19ze0WHP1TRWwwtNl-B45NsEjmf3p-j4403H6zZYA-cIBHhZ6S-mzsxdmvR1l6fzL8dHX2DArvg6SU_gMJ1GHIQ-OGyhlewQaUEhWAyjOH28PzDvdQhU",
    },
    {
      id: 4,
      title: "Marina Suites",
      price: "₹3.20 Cr",
      location: "Worli, Mumbai",
      bhk: 2,
      area: "1,100",
      parking: 1,
      tag: "Hot Deal",
      tagColor: "bg-orange-500",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCTkch_I62vBXllmR_I9RlUVAC4DAAHFtkXWl_A5HOvkbBJo3dLe6AXvAFfx4F4ZqDnlJiyOP2F0Tu9T8KcshJJsNebie3-A3XSSNZPmkNa7lM0LqGGycVddT2va7P7Cwuh6gsJjyUnPpyfMqo6nikguFiloCACDZcBmbNKQmBvklTNCwXWo-rtQU9HAZhU71Gy4bLaM9LuNe5PfzH9V40bBnQOCIWxLffRrZuUjAfeT3nsdXkN6aveJWNXSTltkszYHpw1mSVxIKY",
    },
  ];

  // Filtering Logic
  const filteredProperties = useMemo(() => {
    return propertyList.filter((p) => {
      const matchLocation =
        filters.location === "All" || p.location.includes(filters.location);
      const matchBHK = filters.bhk === "All" || p.bhk === parseInt(filters.bhk);
      return matchLocation && matchBHK;
    });
  }, [filters]);

  return (
    <>
      <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#f9fafb] dark:bg-[#0f172a] transition-colors duration-300">
        <div className="mb-12 md:mt-10 mt-5">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Explore Premium Properties
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Mumbai's most exclusive residences, curated for you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            <div className="sticky top-24 bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-700">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-bold text-xl dark:text-white">Filters</h2>
                <button
                  onClick={() =>
                    setFilters({ location: "All", bhk: "All", budget: 100 })
                  }
                  className="text-xs text-[#1b4e82] dark:text-[#76b82a] font-bold hover:underline uppercase tracking-widest"
                >
                  Reset
                </button>
              </div>

              {/* Location Filter */}
              <div className="mb-8">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                  Location
                </label>
                <div className="relative">
                  <select
                    value={filters.location}
                    onChange={(e) =>
                      setFilters({ ...filters, location: e.target.value })
                    }
                    className="w-full pl-4 pr-10 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-sm focus:ring-2 focus:ring-[#1b4e82]/20 dark:text-white appearance-none cursor-pointer"
                  >
                    <option value="All">All Locations</option>
                    <option value="Bandra">Bandra</option>
                    <option value="Worli">Worli</option>
                    <option value="Juhu">Juhu</option>
                  </select>
                  <span className="material-icons-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>

              {/* BHK Filter */}
              <div className="mb-10">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                  Bedrooms (BHK)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {["All", "2", "3", "4"].map((val) => (
                    <button
                      key={val}
                      onClick={() => setFilters({ ...filters, bhk: val })}
                      className={`py-3 text-xs font-bold rounded-xl border transition-all duration-300 ${
                        filters.bhk === val
                          ? "bg-[#1b4e82] text-white border-[#1b4e82] shadow-lg shadow-[#1b4e82]/30"
                          : "border-slate-100 dark:border-slate-700 dark:text-white hover:border-[#1b4e82]"
                      }`}
                    >
                      {val === "All" ? "Any" : val}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-[#76b82a] hover:bg-[#65a30d] text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-[#76b82a]/20 flex items-center justify-center gap-2">
                <span className="material-icons-outlined text-lg">search</span>
                Show Results
              </button>
            </div>
          </aside>

          {/* Property Grid Area */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Found{" "}
                <span className="font-bold text-slate-900 dark:text-white">
                  {filteredProperties.length}
                </span>{" "}
                luxury properties
              </p>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase">
                  Sort:
                </span>
                <select className="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer dark:text-white">
                  <option>Newest First</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProperties.map((item) => (
                  <PropertyCard key={item.id} property={item} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center bg-white dark:bg-slate-800 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-700">
                <span className="material-icons-outlined text-6xl text-slate-300 mb-4">
                  search_off
                </span>
                <h3 className="text-xl font-bold dark:text-white">
                  No properties found
                </h3>
                <p className="text-slate-500 mt-2">
                  Try adjusting your filters to find more results.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Property;
