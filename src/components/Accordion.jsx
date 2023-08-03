import React, { useState } from "react";
import redRose from "../assets/img/redRose.jpg";
import whiteRose from "../assets/img/whiteRose.jpg";
import pinkRose from "../assets/img/pinkRose.jpg";
import blackRose from "../assets/img/blackRose.jpg";

import "../index.css";

const cards = [
  {
    header: "Red Rose",
    image: redRose,
    text: `Red roses are often given as a symbol of love.
    Many people give red roses on Valentine's Day.
    Red roses are very beautiful and smell nice.
    `,
  },
  {
    header: "White Rose",
    image: whiteRose,
    text: `The white rose symbolizes purity and innocence.
    Brides often choose white roses for their wedding bouquets to represent a fresh start and new beginnings.`,
  },
  {
    header: "Pink Rose",
    image: pinkRose,
    text: `Pink roses represent admiration and gratitude.
    She received a bouquet of pink roses as a thank-you gesture for her help`,
  },
  {
    header: "Black Rose",
    image: blackRose,
    text: `Black roses are often associated with mystery and farewell.
    In some cultures, black roses are considered a symbol of new beginnings and rebirth`,
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
              
                <div>
                  <h2>{card.header}</h2>
                  <p className="text">{card.text}</p>
                </div>
              </div>
              {isActive && (
                <p></p>
              )}
            </article>
          );
        })}
      </section>
    );
  };
  
  export default Accordion;