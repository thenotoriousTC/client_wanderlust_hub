
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 md:px-12",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm text-travel-blue"
          : "bg-transparent text-white"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-bold tracking-tight">
            Wanderlust<span className="text-travel-coral">Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/destinations" className="nav-link">
              Destinations
            </Link>
            <Link to="/itineraries" className="nav-link">
              Itineraries
            </Link>
            <a href="#about" className="nav-link">
              About
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute left-0 right-0 top-full bg-white text-travel-blue shadow-lg py-4 animate-fade-in">
            <div className="flex flex-col space-y-4 px-6">
              <Link 
                to="/destinations" 
                className="py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link 
                to="/itineraries" 
                className="py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Itineraries
              </Link>
              <a 
                href="#about" 
                className="py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
