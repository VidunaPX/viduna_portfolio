import Orb from "../components/Orb";
import BlurText from "../components/BlurText";
import Particles from "../components/Particles";
import WhoAmI from "../components/WhoAmI";



export default function Home() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Banner */}
      <header style={{ width: "100%", height: "625px", position: "relative" }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />

        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <BlurText
            text="Hey,"
            delay={100}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="hero-text"
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <BlurText
            text="I'm Viduna"
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
        <WhoAmI />
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
      </section>
      
    </div>
  );
}
