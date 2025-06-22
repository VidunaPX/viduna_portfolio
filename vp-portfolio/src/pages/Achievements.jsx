import React from "react";
import Navbar from "../components/Navbar";
import BlurText from "../components/BlurText";
import Beams from '../components/Beams'; 




export default function Home() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };


  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      
      {/* Hero Banner */}
      <header style={{ width: "100%", height: "625px", position: "relative" }}>  

        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Beams
            beamWidth={3}
            beamHeight={600}
            beamNumber={3}
            lightColor="#ff00ff"
            speed={10}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={45}
        />
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
            text="My Achievements"
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