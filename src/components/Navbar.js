import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../style/navbar.css";
import logo from "./../img/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-container">
      <img src={logo} alt="Logo" className="logo" />

      {/* Hamburger menu button */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <ul className={`ul ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/schedul" onClick={() => setIsOpen(false)}>Schedule</Link>
        </li>
        <li>
          <Link to="/ourteam" onClick={() => setIsOpen(false)}>Our Team</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </li>
        <li>
          <Link to="/tutorial" onClick={() => setIsOpen(false)}>tutorial</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
