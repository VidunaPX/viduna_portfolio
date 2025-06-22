import React from "react";
import Navbar from "../components/Navbar";
import BlurText from "../components/BlurText";
import Aurora from '../components/Aurora';




export default function Home() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };


  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      
      {/* Hero Banner */}
      <header style={{ width: "100%", height: "625px", position: "relative" }}>
        import Aurora from './Aurora';
  
        <Aurora
          colorStops={["#FF00FF", "#668CFF", "#00FFFF"]}
          blend={1}
          amplitude={1.0}
          speed={1}
        />

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
            text="My Projects"
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