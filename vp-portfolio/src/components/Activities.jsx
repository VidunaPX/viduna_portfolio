import React from "react";
import "./Activities.css";
import Stack from "./Stack"; 

export default function CodingSkills() {
  const images = [
    {
      id: 1,
      img: "/goals4.jpg",
    },
    {
      id: 2,
      img: "/goals3.jpg",
    },
    {
      id: 3,
      img: "/goals2.jpg",
    },
    {
      id: 4,
      img: "/goals1.jpg",
    },
  ];
  return (
    <section className="activities-section">
      <div className="activities-container">
       {/* Left: Glowing Text Box */}
        <div className="activities-box">
          <h2>Activities & Hobbies</h2>
          <p>My hobbies are diverse from playing the guitar to playing volleyball.
           
          </p>
        </div>
        
        {/* Left: Interactive Stack */}
        <div className="activities-stack">
        <Stack
          randomRotation={true}
          sensitivity={180}
          sendToBackOnClick={false}
          cardDimensions={{ width: 400, height: 400 }}
          cardsData={images}
        />
        </div>

            
      </div>
    </section>
  );
}
