import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img alt="Arambh Logo" className="h-8 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX2sPv5NwPKeTcCzq3jMzBxs5ZY9NeTTx9RbB35FS6DQHKVd37kd00XwaAVQAGd1VRJWg7tu89_-Lj8BO9oXFEjPczpCrtp7k_GBVIIHD902mMPi3YxCFUKG1yD7UgWg2nflKxfLmNKAwGNVM2VzcQGw1JMHLSCgsx0Guqem3BJNuiiKfyHVgfkgHocBse12LZUbLqc9wTNQd80F9P3yklUeWQrsmDbMBE5YXi1MaWJNIjIoJ0WgIkkezDr5X781Pi9Ku_yRRaEso" />
              <span className="text-lg font-bold text-[#1a4a7c] dark:text-white">ARAMBH</span>
            </div>
            <p className="text-slate-500 text-sm">Mumbai's premier real estate consultancy built on trust.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-[#1a4a7c]">Featured Listings</a></li>
              <li><a href="#" className="hover:text-[#1a4a7c]">Residential</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500">
          <p>© 2024 Arambh Properties. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;