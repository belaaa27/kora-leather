import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Helper for NavLink active styling
  const navLinkStyle = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-cognac ${
      isActive
        ? "text-cognac underline underline-offset-8 decoration-2"
        : "text-brand-text"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo / Name */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="font-serif text-2xl font-bold tracking-tight text-espresso hover:text-cognac transition-colors"
          >
            Kora Leather
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" end className={navLinkStyle}>
              Home
            </NavLink>
            <NavLink to="/shop" className={navLinkStyle}>
              Shop
            </NavLink>
            <NavLink to="/our-story" className={navLinkStyle}>
              Our Story
            </NavLink>
            <NavLink to="/contact" className={navLinkStyle}>
              Contact
            </NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              to="/shop"
              className="bg-espresso text-ivory text-sm px-5 py-2.5 rounded-xs hover:bg-cognac transition-colors font-medium shadow-xs"
            >
              Explore Shop
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-espresso hover:text-cognac focus:outline-none focus:ring-2 focus:ring-cognac"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-ivory border-b border-espresso/10 px-4 pt-2 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            <NavLink
              to="/"
              end
              onClick={closeMobileMenu}
              className={navLinkStyle}
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              onClick={closeMobileMenu}
              className={navLinkStyle}
            >
              Shop
            </NavLink>
            <NavLink
              to="/our-story"
              onClick={closeMobileMenu}
              className={navLinkStyle}
            >
              Our Story
            </NavLink>
            <NavLink
              to="/contact"
              onClick={closeMobileMenu}
              className={navLinkStyle}
            >
              Contact
            </NavLink>
          </nav>
          <div className="pt-2">
            <Link
              to="/shop"
              onClick={closeMobileMenu}
              className="block text-center bg-espresso text-ivory text-sm py-2.5 rounded-xs hover:bg-cognac transition-colors font-medium"
            >
              Explore Shop
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
