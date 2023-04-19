import React, { useState } from 'react';
import './ImageSlider.css'
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3];

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <div className="image-slider">
      <img src={images[currentImageIndex]} alt="Slider" className="slider-image" />
      <button onClick={handlePrevImage} className="slider-button prev-button">
        &#10094;
      </button>
      <button onClick={handleNextImage} className="slider-button next-button">
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
