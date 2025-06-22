import React from "react";
import Navbar from "../components/Navbar";
import BlurText from "../components/BlurText";
import Lightning from '../components/Lightning'; 



export default function Home() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };


  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      
      {/* Hero Banner */}
      <header style={{ width: "100%", height: "625px", position: "relative" }}>
        <div style={{ display: "flex", width: '100%', height: '600px', position: 'relative' }}>
        <div style={{ flex: 1 }}>
            <Lightning
            hue={200}
            xOffset={0}
            speed={1}
            intensity={1}
            size={1}
            />
        </div>

        {/* Right Lightning */}
        <div style={{ flex: 1 }}>
            <Lightning
            hue={250}
            xOffset={0}
            speed={1}
            intensity={1}
            size={1}
            />
        </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-45%, -30%)",
            zIndex: 10,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <BlurText
            text="My Blog"
            delay={100}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="hero-text"
          />
        </div>

      </header>
    </div>
  );
}