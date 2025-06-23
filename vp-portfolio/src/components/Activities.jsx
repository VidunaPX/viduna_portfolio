import React from "react";
import "./Activities.css";
import Stack from "./Stack"; 
import InfiniteMenu from "./InfiniteMenu"; 

export default function CodingSkills() {
  const images = [
    {
      id: 1,
      img: "/beach.jpg",
    },
    {
      id: 2,
      img: "/pc.jpg",
    },
    {
      id: 3,
      img: "/coding.jpg",
    },
    {
      id: 4,
      img: "/volleyball.jpg",
    },
  ];

  const items = [
    {
      image: '/guitar.PNG',
      link: '',
      title: 'Guitar',
      description: ''
    },
    {
      image: '/transformers.jpg',
      link: '',
      title: 'Favourite Movie',
      description: ''
    },
    {
      image: '/academic.png',
      link: '',
      title: 'Dark Academia Vibes',
      description: ''
    },
    {
      image: '/blackcar.jpg',
      link: '',
      title: 'Vintage Cars',
      description: ''
    }
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
      <div style={{ height: '600px', position: 'relative' }}>
        <InfiniteMenu items={items}/>
      </div>

    </section>
  );
}
