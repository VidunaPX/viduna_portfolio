import React from "react";
import Stack from "./Stack";
import "./MyGoals.css";

export default function MyGoals() {
  const images = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
    },
  ];

  return (
    <section className="mygoals-section">
      <div className="mygoals-container">
        {/* Left: Interactive Stack */}
        <div className="mygoals-stack">
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: 400, height: 400 }}
            cardsData={images}
          />
        </div>

        {/* Right: Glowing Text Box */}
        <div className="mygoals-box">
          <h2>My Goals</h2>
          <p>
            My passion lies at the intersection of technology, innovation, and
            problem-solving. I aspire to become a leading robotics engineer,
            pushing the boundaries of automation and AI for the betterment of
            society. I’m constantly seeking opportunities to grow, create, and
            collaborate.
          </p>
        </div>
      </div>
    </section>
  );
}
