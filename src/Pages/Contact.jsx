import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'Select Option',
    budget: 'Select Range',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where you'll connect to your Node.js/Express backend
    console.log("Form Submitted:", formState);
    alert("Thank you! Our property expert will reach out shortly.");
  };

  return (
    <>
    <Navbar/>
    <div className="bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors duration-500">
      <main className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-20 reveal transition-all duration-1000">
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] text-[#65A30D] uppercase bg-[#65A30D]/10 rounded-full">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#1A365D] dark:text-white mb-6">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A365D] to-[#65A30D] dark:from-blue-400 dark:to-emerald-400">Arambh Properties</span>
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              Experience luxury real estate services built on a foundation of trust. Let us help you navigate the Mumbai property market with precision.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form Card */}
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-none p-10 md:p-12 border border-slate-100 dark:border-slate-800">
              <h2 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3 dark:text-white">
                <span className="material-icons-outlined text-[#65A30D]">send</span>
                Property Inquiry
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-400">Full Name</label>
                    <input 
                      required
                      className="w-full px-4 py-4 rounded-2xl border-none bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-white focus:ring-2 focus:ring-[#65A30D]/20 outline-none transition-all"
                      placeholder="John Doe" 
                      type="text"
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-400">Phone Number</label>
                    <input 
                      required
                      className="w-full px-4 py-4 rounded-2xl border-none bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-white focus:ring-2 focus:ring-[#65A30D]/20 outline-none transition-all"
                      placeholder="+91 98765-43210" 
                      type="tel"
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-400">Email Address</label>
                  <input 
                    required
                    className="w-full px-4 py-4 rounded-2xl border-none bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-white focus:ring-2 focus:ring-[#65A30D]/20 outline-none transition-all"
                    placeholder="john@example.com" 
                    type="email"
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-400">Requirement</label>
                    <select 
                      className="w-full px-4 py-4 rounded-2xl border-none bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-white focus:ring-2 focus:ring-[#65A30D]/20 outline-none appearance-none"
                      onChange={(e) => setFormState({...formState, type: e.target.value})}
                    >
                      <option>Residential Buy</option>
                      <option>Commercial Buy</option>
                      <option>Residential Rent</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-400">Budget</label>
                    <select 
                      className="w-full px-4 py-4 rounded-2xl border-none bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-white focus:ring-2 focus:ring-[#65A30D]/20 outline-none appearance-none"
                      onChange={(e) => setFormState({...formState, budget: e.target.value})}
                    >
                      <option>₹1 Cr - ₹5 Cr</option>
                      <option>₹5 Cr - ₹10 Cr</option>
                      <option>₹10 Cr+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-400">Message</label>
                  <textarea 
                    className="w-full px-4 py-4 rounded-2xl border-none bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-white focus:ring-2 focus:ring-[#65A30D]/20 outline-none transition-all"
                    placeholder="Tell us about your dream property..." 
                    rows="4"
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  className="w-full bg-[#1A365D] hover:bg-[#0F172A] text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-[#1A365D]/20 transform active:scale-[0.98] transition-all"
                  type="submit"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Info and Map Section */}
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: '', title: 'Office Address', detail: 'Arambh Plaza, 4th Floor, BKC Area, Mumbai 400051' },
                  { icon: '', title: 'Business Hours', detail: 'Mon - Sat: 10AM - 7PM Sunday: By Appointment' },
                  { icon: '', title: 'Call Us', detail: '+91 22 2345 6789 \n +91 98765 43210' },
                  { icon: '', title: 'Email Us', detail: 'sales@arambh.com \n info@arambh.com' }
                ].map((item, i) => (
                  <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group">
                    <div className="w-12 h-12 bg-[#65A30D]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[#65A30D]">{item.icon}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 dark:text-white">{item.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Map Integration */}
              <div className="relative w-full h-[400px] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner group">
                <iframe 
                  allowFullScreen="" 
                  className="relative z-10 grayscale hover:grayscale-0 transition-all duration-1000" 
                  height="100%" 
                  loading="lazy" 
                  title="office-location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.793223005886!2d72.86241907579895!3d19.072847882133464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e123313173%3A0x37803d76672323e!2sBandra%20Kurla%20Complex!5e0!3m2!1sen!2sin!4v1708812345678!5m2!1sen!2sin" 
                  style={{ border: 0 }} 
                  width="100%"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;