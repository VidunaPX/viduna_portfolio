import React from "react";
import "./CodingSkills.css";
import TiltedCard from './TiltedCard';

export default function CodingSkills() {
  return (
    <section className="codingskills-section">
      <div className="codingskills-container">
        {/* Left: Interactive Stack */}

            <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="400px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
                <p className="tilted-card-demo-text">
                Kendrick Lamar - GNX
                </p>
            }
            />
  

        {/* Right: Glowing Text Box */}
        <div className="codingskills-box">
          <h2>Coding Skills</h2>
          <p>
            - Proficiancy in Python
            <br></br>
            - Experianced in Javascript
            <br></br>
            - Proficiancy in HTML
            <br></br>
            - Proficiancy in CSS
            <br></br>
            - Experianced in ReactJS
            <br></br>
            - Experianced in NodeJS

          </p>
        </div>
      </div>
    </section>
  );
}
