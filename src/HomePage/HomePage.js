import React, { Component } from 'react';
import ImageSlider from './ImageSlider';
import VendorCard from './VendorCard';
import LocationCard from './LocationCard';
import QuoteSlider from './QuoteSlider';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <div className="app-name">
          <h1>Wedding Planner</h1>
        </div>
        <div className="image-slider">
          <ImageSlider />
        </div>
        <div className="vendor-cards">
          <h2>Vendors</h2>
          <VendorCard />
        </div>
        <div className="location-cards">
          <h2>Locations</h2>
          <div className="location-card-container">
            <LocationCard />
           
          </div>
        </div>
        <div className="quote-slider">
         <QuoteSlider/>
        </div>
      </div>
    );
  }
}

export default HomePage;
