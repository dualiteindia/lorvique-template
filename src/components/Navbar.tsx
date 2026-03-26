import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  theme?: 'dark' | 'light';
}

interface NavItem {
  label: string;
  path: string;
}

const Navbar: React.FC<NavbarProps> = ({ theme = 'dark' }) => {
  const isLight = theme === 'light';
  const { cartCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  
  const navLinks: NavItem[] = [
    { label: 'New In', path: '#' },
    { label: 'Jewelry', path: '/category/jewelry' },
    { label: 'Watches', path: '/category/watches' },
    { label: 'Accessories', path: '/category/accessories' },
    { label: 'Decorations', path: '/category/decorations' },
    { label: 'Gifts', path: '/category/gifts' },
    { label: 'Lorvique Created Diamonds', path: '/category/diamonds' },
    { label: 'World of Lorvique', path: '/world-of-lorvique' },
    { label: 'Outlet', path: '#' }
  ];

  // Handle Escape key and Click Outside to close the mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header 
      ref={navRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      className={`absolute top-0 left-0 w-full z-50 ${isLight ? 'text-lorvique-dark bg-lorvique-beige border-b border-gray-200' : 'text-white'}`}
    >
      {/* Top Bar */}
      <div className={`flex justify-between items-center px-6 py-2 text-xs font-light tracking-wide border-b ${isLight ? 'border-gray-200 bg-lorvique-beige' : 'border-white/20 bg-black/10 backdrop-blur-sm'}`}>
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity">
          <MapPin size={14} />
          <span className="hidden sm:inline">Stores</span>
        </div>
        <div className="hidden md:block">
          Free standard shipping over: $120.00
        </div>
        <div className="flex items-center gap-6">
          <span className="cursor-pointer hover:opacity-70 transition-opacity hidden sm:block">Lorvique Club</span>
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity">
            <User size={14} />
            <span className="hidden sm:inline">Login</span>
          </div>
        </div>
      </div>

      {/* Main Nav Container (Flex Column for Desktop Two-Row Layout) */}
      <div className={`px-6 py-4 md:py-6 flex flex-col relative ${isLight ? 'bg-lorvique-beige' : 'bg-gradient-to-b from-black/40 to-transparent'}`}>
        
        {/* Top Row: Mobile Layout & Desktop Logo/Icons */}
        <div className="flex items-center justify-between w-full">
          
          {/* Mobile Menu Toggle (Left on Mobile, Hidden on Desktop) */}
          <div className="flex-1 lg:hidden flex items-center justify-start">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              className="p-2 -ml-2 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current rounded"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Left Spacer (Ensures Logo stays perfectly centered) */}
          <div className="hidden lg:block flex-1"></div>

          {/* Logo (Centered on both Mobile and Desktop) */}
          <div className="flex-1 flex justify-center items-center lg:pb-2">
            <Link 
              to="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current rounded px-2"
            >
              {/* Increased lg and xl text sizes by 50% (2.925rem -> 4.3875rem, 3.9rem -> 5.85rem) */}
              <h1 className="text-[2.4375rem] md:text-[2.925rem] lg:text-[4.3875rem] xl:text-[5.85rem] lg:leading-none tracking-widest font-serif uppercase">Lorvique</h1>
            </Link>
          </div>
          
          {/* Icons (Right aligned on both Mobile and Desktop) */}
          <div className="flex-1 flex items-center justify-end gap-4">
            <button aria-label="Search" className="p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current rounded">
              <Search size={18} className="cursor-pointer hover:opacity-70 transition-opacity" />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="relative p-1 cursor-pointer hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current rounded"
              aria-label="Open shopping bag"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-sans">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Bottom Row: Desktop Nav Links */}
        <nav className="hidden lg:flex justify-center items-center gap-6 xl:gap-10 text-sm font-light tracking-wider pt-4 w-full">
          {navLinks.map((item) => (
            <Link 
              key={item.label} 
              to={item.path} 
              className="px-3 py-1 hover:opacity-70 transition-all duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current rounded"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        id="mobile-menu"
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[80vh] opacity-100 shadow-2xl border-b border-white/10' : 'max-h-0 opacity-0'
        } ${isLight ? 'bg-lorvique-beige text-lorvique-dark' : 'bg-lorvique-dark text-white'}`}
      >
        <nav className="flex flex-col px-8 py-6 gap-6 text-sm font-light tracking-wider overflow-y-auto max-h-[80vh]">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`hover:opacity-70 transition-opacity uppercase tracking-widest pb-4 border-b ${isLight ? 'border-gray-200' : 'border-white/10'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Semi-transparent Backdrop for Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/50 z-[-1] transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />
    </motion.header>
  );
};

export default Navbar;
