// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Viduna | Portfolio</div>
      <ul className="navbar-links">
        <li><a href="#Home">Home</a></li>
        <li><a href="#Skills/Hobbies">Skills/Hobbies</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Achievements">Achievements</a></li>
        <li><a href="#Blog">Blog</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
