import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-courier-dark">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img
              src="/Rocket-Builder/logo/logo_blanc.svg"
              alt="Rocket Courrier"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/about" 
            className="text-courier-light hover:text-courier-lime transition-colors font-asap text-nav"
          >
            À Propos
          </Link>
          <Link 
            to="/services" 
            className="text-courier-light hover:text-courier-lime transition-colors font-asap text-nav"
          >
            Services
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-courier-light focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-courier-dark border-t border-courier-light/20 py-2">
          <nav className="flex flex-col space-y-3 px-4 py-2">
            <Link 
              to="/about" 
              className="text-courier-light hover:text-courier-lime transition-colors font-asap text-lg py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              À Propos
            </Link>
            <Link 
              to="/services" 
              className="text-courier-light hover:text-courier-lime transition-colors font-asap text-lg py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
