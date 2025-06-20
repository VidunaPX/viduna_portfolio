import React from "react";
import "./Footer.css";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© {new Date().getFullYear()} Viduna Pilanavithanage. All rights reserved.</p>
        <div className="footer-icons">
          <a href="mailto:vidunaop@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="footer-icon" />
          </a>
          <a href="https://www.instagram.com/vidunap?igsh=ZjNzMmV6YjJ2eWtm&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer-icon" />
          </a>
          <a href="https://github.com/VidunaPX" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
