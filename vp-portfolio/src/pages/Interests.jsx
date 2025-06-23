import React from "react";
import Hyperspeed from "../components/Hyperspeed";
import Navbar from "../components/Navbar";
import BlurText from "../components/BlurText";
import Particles from "../components/Particles";
import CodingSkills from "../components/CodingSkills";
import Activities from "../components/Activities"; 



export default function Home() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };


  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      
      {/* Hero Banner */}
      <header style={{ width: "100%", height: "625px", position: "relative" }}>
        <Hyperspeed
            effectOptions={{
                onSpeedUp: () => { },
                onSlowDown: () => { },
                distortion: 'turbulentDistortion',
                length: 400,
                roadWidth: 10,
                islandWidth: 2,
                lanesPerRoad: 4,
                fov: 90,
                fovSpeedUp: 150,
                speedUp: 2,
                carLightsFade: 0.4,
                totalSideLightSticks: 20,
                lightPairsPerRoadWay: 40,
                shoulderLinesWidthPercentage: 0.05,
                brokenLinesWidthPercentage: 0.1,
                brokenLinesLengthPercentage: 0.5,
                lightStickWidth: [0.12, 0.5],
                lightStickHeight: [1.3, 1.7],
                movingAwaySpeed: [60, 80],
                movingCloserSpeed: [-120, -160],
                carLightsLength: [400 * 0.03, 400 * 0.2],
                carLightsRadius: [0.05, 0.14],
                carWidthPercentage: [0.3, 0.5],
                carShiftX: [-0.8, 0.8],
                carFloorSeparation: [0, 5],
                colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xFFFFFF,
                brokenLines: 0xFFFFFF,
                leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                sticks: 0x03B3C3,
                }
            }}
        />

        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -30%)",
            zIndex: 10,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <BlurText
            text="My Skills & Hobbies"
            delay={100}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="hero-text"
          />
        </div>

        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
        />
        </div>
        <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '5px',
            background: 'linear-gradient(to right,rgba(255, 0, 255, 0.27),rgba(43, 43, 43, 0.67),rgba(0, 255, 255, 0.27))',
            zIndex: 20
       }} />
      </header>
      <section>
        <div>
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
        />
        </div>
        <CodingSkills />
      </section>
      <section>
        <div>
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
        />
        </div>
        <Activities />
      </section>
    </div>
  );
}