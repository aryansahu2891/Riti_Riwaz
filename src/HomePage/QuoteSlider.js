import React, { useState, useEffect } from 'react';
import './QuoteSlider.css';

const QuoteSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const quotes = [
    {
      text: "A successful marriage requires falling in love many times, always with the same person.",
      author: "Mignon McLaughlin"
    },
    {
      text: "To love, laughter and happily ever after.",
      author: "Unknown"
    },
    {
      text: "The best thing to hold onto in life is each other.",
      author: "Audrey Hepburn"
    },
    {
      text: "I choose you. And I'll choose you over and over and over. Without pause, without a doubt, in a heartbeat. I'll keep choosing you.",
      author: "Unknown"
    },
    {
      text: "A great marriage is not when the 'perfect couple' comes together. It is when an imperfect couple learns to enjoy their differences.",
      author: "Dave Meurer"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="quote-slider-container">
      <div className="quote-slider-box">
        <div className="quote-slider">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className={`quote-slide ${activeIndex === index ? "active" : ""}`}
            >
              <p>"{quote.text}"</p>
              <p>- {quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuoteSlider;
