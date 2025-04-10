import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contacts", label: "Contacts" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`nav ${scrolled ? "bg-opacity-50" : "bg-transparent"}`}>
      <div className="nav-container">
        <div className="nav-inner">
          <div className="nav-logo">
            <Link to="/" className="nav-logo-text">
              Portfolio.
            </Link>
          </div>

          <div className="nav-desktop">
            <div className="nav-items">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`nav-item ${
                    location.pathname === item.to ? "active" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div
            className="nav-mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>

        {isMenuOpen && (
          <div className="nav-mobile-menu">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`nav-item ${
                  location.pathname === item.to ? "active" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
