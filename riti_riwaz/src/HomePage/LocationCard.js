import React from 'react';
import './LocationCard.css';
import image4 from './images/image4.jpeg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpeg';

const LocationCard = (props) => {
  let imageSrc;
  switch (props.locationName) {
    case 'Location 1':
      imageSrc = image4;
      break;
    case 'Location 2':
      imageSrc = image5;
      break;
    case 'Location 3':
      imageSrc = image6;
      break;
    default:
      imageSrc = '';
  }

  return (
    <div className="location-card">
      <div className="location-image">
        <img src={imageSrc} alt={props.locationName} />
      </div>
      <div className="location-info">
        <h3>{props.locationName}</h3>
        <p>{props.locationAddress}</p>
        <a href={props.locationWebsite} target="_blank" rel="noopener noreferrer">Visit Website</a>
      </div>
    </div>
  );
};

const LocationCards = () => {
  return (
    <div className="location-cards-container">
      <LocationCard 
        locationName="Location 1"
        locationAddress="123 Main Street"
        locationWebsite="https://www.example.com/location1"
      />
      <LocationCard 
        locationName="Location 2"
        locationAddress="456 Broad Avenue"
        locationWebsite="https://www.example.com/location2"
      />
      <LocationCard 
        locationName="Location 3"
        locationAddress="789 Pine Boulevard"
        locationWebsite="https://www.example.com/location3"
      />
    </div>
  );
};

export default LocationCards;
