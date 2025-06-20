import React from "react";
import ProfileCard from "./ProfileCard"; // make sure the path is correct

export default function WhoAmI() {
  return (
    <section className="whoami-section">
      <div className="whoami-container">
        {/* Left: Text Card */}
        <div className="whoami-card">
          <h2>Who Am I?</h2>
          <p>
            I'm Viduna — a passionate full-stack developer with a love for clean code and elegant user interfaces. From crafting front-end interactions to building scalable back-end systems, I enjoy creating seamless digital experiences.
          </p>
        </div>

        {/* Right: ProfileCard */}
        <div className="whoami-profile">
          <ProfileCard
            name="Viduna Pilanavithanage"
            title="Aspiring Robotics Engineer"
            handle="viduna.codes"
            status="Available"
            contactText="Reach Out"
            avatarUrl="/images/profile.jpg" // replace with your actual path
            miniAvatarUrl="/images/profile.jpg"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log("Contact button clicked")}
          />
        </div>
      </div>
    </section>
  );
}
