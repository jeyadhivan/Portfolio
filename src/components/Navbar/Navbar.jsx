import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contacts", label: "Contacts" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                  className="nav-item"
                >
                  <span className="nav-item-text">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
