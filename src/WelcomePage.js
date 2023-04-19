import React from 'react';
import './WelcomePage.css';
import backgroundImage from './img-1.jpg';

function WelcomePage() {
  return (
    <div className="welcome-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Welcome to our Wedding Web App</h1>
      <a href="/LoginPage"><button>Let's Get Started</button></a>
    </div>
  );
}

export default WelcomePage;
