import React from "react";
import Stack from "./Stack";
import "./MyGoals.css";

export default function MyGoals() {
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
