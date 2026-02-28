import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const categories = [
    "All Posts",
    "Investment Tips",
    "Legal Guidance",
    "Mumbai Trends",
    "Home Design",
  ];

  const posts = [
    {
      id: 1,
      title: "5 Essential Legal Documents for Home Buyers in India",
      excerpt:
        "Understanding the RERA guidelines and RERA carpet area can save you from future legal hurdles. Here is your essential checklist.",
      category: "Legal Guidance",
      readTime: "8 min read",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB8c2Di08yvxgDKanfNiGGJ5jpBk87UxL-gAJqKTIfhocT_fgK5y6E1qg7k9v2yQqBSqPYKqlW1e5GhspqTKum7JGMEGFfDX13gs4aPkt8CTlXtwhFWcYqz3AQGCbPtKqbXZE731NcxCKgJj0XnHUiI1HCYGf2XgjS4qmXm8R3H95Xo6qQ64IBlKwfpFEW-WWWTsopXK6vge8QAKcWXudwWG4SYIUG2GfVuN99T1CA5M0nXtBTPsM0uFBrV4kYzdaOqGyqJE09_dZk",
    },
    {
      id: 2,
      title: "Maximizing ROI: Why Commercial Real Estate is Booming",
      excerpt:
        "With the rise of co-working spaces, commercial investments are seeing a 12% yield increase. Explore the best suburbs to invest.",
      category: "Investment Tips",
      readTime: "12 min read",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCeL3DpmutK7CIPm6t6_GkFCB4Fck27Dmaja6mwUbBzGSVBcDtbXiiSg66OQ7K-SQw0LFbawt3Jp3_Pvj5KMl7fwoyrf-V7WhtArLDKqIdMz114JAWlgDcIx6tD2QWG1adAQOi-78Y80JdHz3gcq6am6KY0QfTCxj2N8KmEdQzJQFHP4z3fIcO0rNOibfszWb1VkmiNjgIUwv2pZQ2-UPIP1WE35fpcHS3UVKBCHSCrzVsOeOLWCeOO2bj2pdlqyelef0Z9WLwd0p0",
    },
    {
      id: 3,
      title: "Vastu Tips for Your New Luxury Home",
      excerpt:
        "Harmonizing your living space with ancient wisdom. Learn how small architectural tweaks can bring positive energy to your villa.",
      category: "Home Design",
      readTime: "6 min read",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDVru1Wz2bDlj3rHpnabsSywzYUE00mettHMau9TNXPjX2fVqggqeqAdamldJKV3TgrayiHHzwQDAS0daCHzn478QTrGiySxTahKj_7Q0XZJJ9qNlO20KsqKPh6yrdYepOsF1d3NY4vAKJ06UOubQOgqw_PLvZMtvOF4qC6iwJuLx0cgObMTjoobNzBiNY6fincuk0nFbXHE8kYKxJ9rtRI-q4VM7j0a7Rpn_rGWMDKdwXOhGITUD6DYgnBG6QRIfMqh_U9Y81ydSM",
    },
    {
      id: 4,
      title: "Thane's Transformation: The New Suburban Goldmine",
      excerpt:
        "Once an industrial zone, Thane is now the preferred choice for millennial homebuyers. Here's why the infrastructure boom is key.",
      category: "Mumbai Trends",
      readTime: "10 min read",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDiUA4xMFqnd5OwkV1b49jusGr8Ghmbp2_isSd1OmDHYzy6Xx6vHCrCxBhSw6ROD3G65WMhJ3A7JT-3WAeyPq5r4klGRn_8EFmvmgwI9PQBr2sGpZa6JQojrCsrbayOgxQ_v2IOhCXzcj1VnyOPT2gQMtMX16iC0rTXTdjfMECPVmsIjZkgip2nnnDOFvtSCeZyaPxIGi7ErXpBfCYbYAazhexnZHb6FKB9aRNBThhAxG0mkwzmWU3FrjIqEWb2HyC9_pNdzfOzazk",
    },
  ];

  return (
    <>
      <div className="bg-[#fcfcfd] dark:bg-[#0f172a] transition-colors duration-300">
        <main className="container mx-auto px-4 md:px-8 py-16">
          {/* Page Header */}
          <div className="mb-16 md:mt-10 mt-5">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-[#1a3a5f] dark:text-white leading-tight">
              Real Estate <span className="text-[#79b928]">Insights</span>
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl font-light">
              Expert market analysis, investment strategies, and local Mumbai
              updates to help you navigate the luxury property market with
              confidence.
            </p>
          </div>

          {/* Featured Post */}
          <section className="mb-20">
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-800 flex flex-col lg:flex-row shadow-2xl border border-slate-100 dark:border-slate-700">
              <div className="lg:w-3/5 overflow-hidden">
                <img
                  alt="Modern Mumbai Skyline"
                  className="w-full h-[400px] lg:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkcpMYg9lijR5Uy3lvp0g9FNngn7Rv3lgyg_P1ZBhuDgrsOxkvg_c0owH5_cGEpg4HcDk9-3GU0eu6uWsEzQtv0Qcr_ZKDXuBkc4kuKwfXdGi_tTtR-ybUqTbzmsaki1qiEb9oMWhRLgggnUOtve1WX2qqe5mv1oP7cUnka0XqMmk7Zf190hk9WiT2t_Kkbxk5bfglBdWLlGsQgzDVd8cUViRox_HDKMz66PjMrhUOykhr8NDehEMRHLmEYwLshLZJMzRMleolDzw"
                />
              </div>
              <div className="lg:w-2/5 p-10 md:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 bg-[#79b928]/10 text-[#79b928] text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                    Featured Update
                  </span>
                  <span className="text-slate-400 text-xs font-medium">
                    June 12, 2024
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#1a3a5f] dark:text-white leading-[1.2]">
                  The Rise of Luxury Micro-Markets in Mumbai
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-light">
                  Discover why investors are shifting focus to emerging luxury
                  hubs like Upper Worli and how infrastructure projects are
                  reshaping the 2024 outlook.
                </p>
                <a
                  href="#"
                  className="flex items-center gap-3 text-[#1a3a5f] dark:text-[#79b928] font-bold group/link"
                >
                  Read Full Article
                  {/* <span className="material-icons text-sm group-hover/link:translate-x-2 transition-transform">arrow_forward</span> */}
                </a>
              </div>
            </div>
          </section>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-[#1a3a5f] text-white shadow-lg"
                    : "border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-[#79b928]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 shadow-sm">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={post.image}
                  />
                  <div className="absolute top-5 left-5">
                    <span className="bg-white/95 dark:bg-slate-900/95 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-xl text-[#1a3a5f] shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-[#1a3a5f] dark:text-white group-hover:text-[#79b928] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-2 font-light leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {post.readTime}
                  </span>
                  {/* <span className="material-icons text-lg text-[#1a3a5f] dark:text-slate-300">open_in_new</span> */}
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center items-center gap-3">
            <button className="w-12 h-12 flex items-center justify-center rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-400 hover:bg-[#79b928] hover:text-white transition-all">
              {/* <span className="material-icons">chevron_left</span> */}
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#1a3a5f] text-white font-bold">
              1
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-[#79b928]">
              2
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-400 hover:bg-[#79b928] hover:text-white transition-all">
              {/* <span className="material-icons">chevron_right</span> */}
            </button>
          </div>
        </main>

        {/* Newsletter Section */}
        <section className="mt-24 py-24 bg-[#1a3a5f] dark:bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#79b928]/20 rounded-full blur-[100px]"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Stay Ahead of the Market
            </h2>
            <p className="text-slate-300 mb-12 max-w-xl mx-auto font-light leading-relaxed">
              Subscribe to our weekly newsletter and receive exclusive insights,
              early project previews, and expert advice.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-white/5 p-2 rounded-[2rem] border border-white/10 backdrop-blur-sm">
              <input
                className="flex-1 px-6 py-4 rounded-full bg-transparent border-none focus:outline-none text-white placeholder:text-slate-400"
                placeholder="professional email"
                type="email"
              />
              <button
                className="bg-[#79b928] px-10 py-4 rounded-full font-bold hover:bg-[#65a30d] transition-all shadow-lg"
                type="submit"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[10px] text-slate-500 mt-6 uppercase tracking-[0.3em]">
              Built on Trust. Driven by Results.
            </p>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Blog;
