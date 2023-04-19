import React from 'react';
import Hote from './images/Hote.jpeg';
import Catering from './images/Catering.jpeg';
import Mehendi from './images/Mehemdi.jpg';
import Makeup from './images/Makeup.jpeg';
import Photographer from './images/Photographer.jpeg';

import './VendorCard.css'

const VendorCard = (props) => {
  return (
    <div className="vendor-card">
      <div className="vendor-image">
        <img src={props.imageSrc} alt={props.vendorName} />
      </div>
      <div className="vendor-info">
        <h3>{props.vendorName}</h3>
        <p>{props.vendorType}</p>
        <a href={props.vendorWebsite} target="_blank" rel="noopener noreferrer">Visit Website</a>
      </div>
    </div>
  );
}

const VendorCards = () => {
  return (
    <div className="vendor-cards-container">
      <VendorCard 
        imageSrc={Photographer}
        vendorName="Photographers"
        vendorType="Wedding Photography"
        vendorWebsite="https://www.example.com/photographers"
      />
      <VendorCard 
        imageSrc={Makeup}
        vendorName="Makeup and Hair"
        vendorType="Bridal Makeup"
        vendorWebsite="https://www.example.com/makeup"
      />
      <VendorCard 
        imageSrc={Catering}
        vendorName="Catering"
        vendorType="Wedding Catering"
        vendorWebsite="https://www.example.com/catering"
      />
      <VendorCard 
        imageSrc={Hote}
        vendorName="Hotels"
        vendorType="Wedding Venues"
        vendorWebsite="https://www.example.com/hotels"
      />
      <VendorCard 
        imageSrc={Mehendi}
        vendorName="Mehndi Artists"
        vendorType="Bridal Mehndi"
        vendorWebsite="https://www.example.com/mehndi"
      />
    </div>
  );
}

export default VendorCards;
