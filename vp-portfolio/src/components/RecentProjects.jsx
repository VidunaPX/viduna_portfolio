import React from "react";
import "./RecentProjects.css";
import ChromaGrid from "./ChromaGrid";

const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#00FFFF",
    gradient: "linear-gradient(145deg,rgb(1, 114, 114), #000)",
    url: "https://github.com/sarahjohnson"
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#FF00FF",
    gradient: "linear-gradient(180deg,rgb(114, 2, 114), #000)",
    url: "https://linkedin.com/in/mikechen"
  }
] 

export default function RecentProjects() {
  return (
    <section className="recent-projects-section">
      <div className="recent-projects-container">
        {/* Left: Text Box */}
        <div className="recent-projects-box" style={{width: "350px", padding: "20px" }}>
          <h2>Recent Projects</h2>
          <p>
            Dive into my latest creations — from real-time apps and smart tools to open-source contributions. These projects reflect my passion for innovation and impact-driven coding.
          </p>
          <button className="see-more-btn">See More →</button>
        </div>

        {/* Right: ChromaGrid Display */}
        <div className="recent-projects-display" style={{ height: "600px",maxWidth: "200px", position: "relative" }}>
          <ChromaGrid 
            items={items}
            radius={50}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </div>
    </section>
  );
}

