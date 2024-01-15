// Home.js
import React from 'react';
import Img from '../images/health.jpg';

const Home = () => {
  return (
    <div className="homepage">
      <div className="text-section">
        <h1>Fitness Tracker App</h1>
        <h2>Welcome to the Health & Fitness Tracker</h2>
        <h2>Track your diet, exercise, and health data with our Fitness Tracker app.</h2>
      </div>
      <div className="image-section">
        <img src={Img} alt="image" />
        <p>Eat smarter. Live better.</p>
      </div>
    </div>
  );
};

export default Home;