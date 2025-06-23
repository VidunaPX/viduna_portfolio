// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css"; 
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Viduna | Portfolio</div>
      <ul className="navbar-links">
        <Link to="/" className ="navbar-links home-link">Home</Link>
        <Link to="/interests"className ="navbar-links interests-link">Skills/Hobbies</Link>
        <Link to="/projects" className ="navbar-links home-link">Projects</Link>
        <Link to="/achievements" className ="navbar-links interests-link">Achievements</Link>
        <Link to="/blog" className ="navbar-links interests-link">Blog</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
