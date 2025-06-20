import React from "react";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./ContactMe.css";

export default function ContactMe() {
  return (
    <section className="contactme-section" id="contact">
      <div className="contactme-container">
        {/* Left: Contact Form */}
        <div className="contactme-form">
          <h2>Contact Me</h2>
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="contactme-info">
          <h3>Let's Connect</h3>
            <p>
                <FaEnvelope className="icon" />
                 <a href="mailto:vidunaop@gmail.com">vidunaop@gmail.com</a>
            </p>
            <p>
                <FaInstagram className="icon" />
                <a href="https://www.instagram.com/vidunap?igsh=ZjNzMmV6YjJ2eWtm&utm_source=qr" target="_blank" rel="noopener noreferrer">Vidunap</a>
            </p>
            <p>
                <FaGithub className="icon" />
                <a href="https://github.com/VidunaPX" target="_blank" rel="noopener noreferrer">VidunaPX</a>
            </p>
        </div>
      </div>
    </section>
  );
}
