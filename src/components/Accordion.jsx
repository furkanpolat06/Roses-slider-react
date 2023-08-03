import React, { useState } from "react";
import image1 from "../assets/img/1.jpg";
import image2 from "../assets/img/2.jpg";
import image3 from "../assets/img/3.jpg";
import image4 from "../assets/img/4.jpg";
import image5 from "../assets/img/5.jpg";
import "../index.css";

const cards = [
  {
    header: "Canada",
    image: image2,
    text: `Image description here`,
  },
  {
    header: "Bali",
    image: image1,
    text: `Image description here`,
  },
  {
    header: "Spain",
    image: image3,
    text: `Image description here`,
  },
  {
    header: "Indonesia",
    image: image4,
    text: `Image description here`,
  },
  {
    header: "South Africa",
    image: image5,
    text: `Image description here`,
  },
];

const Accordion = () => {
    const [active, setActive] = useState(0);
  
    const handleToggle = (index) => setActive(index);
  
    return (
      <section>
        {cards.map((card, index) => {
          const isActive = active === index ? "active" : "";
          return (
            <article
              key={card.image}
              className={isActive}
              onClick={() => handleToggle(index)}
            >
              <img src={card.image} alt="Card" />
              <div className="content">
                <span className="material-symbols-outlined">photo_camera</span>
                <div>
                  <h2>{card.header}</h2>
                  <p>{card.text}</p>
                </div>
              </div>
              {isActive && (
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quas neque repellat ut alias, eum rerum voluptatibus quibusdam, et eaque hic debitis asperiores? Earum fuga nostrum soluta nam inventore deserunt.</p>
              )}
            </article>
          );
        })}
      </section>
    );
  };
  
  export default Accordion;