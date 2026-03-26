import React from 'react';
import { Globe, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Column 1 */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase mb-6">Customer Service & FAQ</h4>
          <ul className="space-y-4 text-xs font-light text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Customer Service Overview</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Order Status</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Gift Card Balance</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns & Exchange</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Store Finder</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Book an Appointment</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase mb-6">Membership</h4>
          <ul className="space-y-4 text-xs font-light text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Register</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Lorvique Club</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Crystal Society (SCS)</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase mb-6">About Us</h4>
          <ul className="space-y-4 text-xs font-light text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">About Lorvique</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Jobs & Career</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Alumni Community</a></li>
            <li><a href="#" className="hover:text-white transition-colors">For Professionals</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Lorvique Created Diamonds</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Kristallwelten</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Code of Conduct & Policies</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase mb-6">Legal</h4>
          <ul className="space-y-4 text-xs font-light text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Terms Of Use</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Imprint</a></li>
            <li><a href="#" className="hover:text-white transition-colors">REACH information</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Data Protection Consent Statement</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20 pt-10 flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="flex items-center gap-2 text-xs text-gray-400 hover:text-white cursor-pointer transition-colors">
            <Globe size={16} />
            <span>United States</span>
            <span className="ml-2">English</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} strokeWidth={1.5} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} strokeWidth={1.5} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={20} strokeWidth={1.5} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} strokeWidth={1.5} /></a>
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-widest uppercase mb-8">Lorvique</h2>
          <p className="text-[10px] text-gray-500 max-w-md mx-auto leading-relaxed">
            Copyright © {new Date().getFullYear()} Lorvique USA. All rights reserved.<br/>
            LORVIQUE and the SWAN logo are registered and trademarks of Lorvique AG.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
