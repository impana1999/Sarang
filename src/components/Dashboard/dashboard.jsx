

import React, { useState, useEffect } from 'react';
import '../Dashboard/dashbard.css'; // Ensure the correct path for the stylesheet

// Import images
import logoImage from '../../assets/forsinglelogo.webp';
import backgroundImage1 from '../../assets/background1.jpg'; // Replace with your actual background images
import backgroundImage2 from '../../assets/background2.jpg';
import backgroundImage3 from '../../assets/background3.jpg';
import leftImage from '../../assets/background3.jpg';  // Image for left side
import createProfileImage from '../../assets/phone.png'; // Step 1 Image
import connectImage from '../../assets/dating.png'; // Step 2 Image
import startDatingImage from '../../assets/kiss.png'; // Step 3 Image

// Store the background images in an array
const backgroundImages = [
  backgroundImage1,
  backgroundImage2,
  backgroundImage3,
];

const Dashboard = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Update background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      {/* Header Section */}
      <header 
        className="header" 
        style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }} 
      >
        <div className="overlay">
          <div className="content">
            <img src={logoImage} alt="Logo" className="logo" />
            <h1 className="title">Diversity Unites Us, Love Defines Us</h1>
            <p className="subtitle">Connecting hearts and minds in a vibrant community.</p>
            <button className="cta-button">Learn More</button>
          </div>
        </div>
      </header>

      {/* Second Section with Left and Right Columns */}
      <section className="split-section">
        {/* Left Column with Image */}
        <div className="left-column">
          <img src={leftImage} alt="Left Section Image" className="left-image" />
        </div>
        
        {/* Right Column with Text */}
        <div className="right-column">
          <h2 className="section-title">Find Your Perfect Match</h2>
          <p className="section-text">
            Join a community of like-minded individuals looking to connect. 
            Our platform offers easy-to-use tools to meet people and start meaningful conversations.
          </p>
          <button className="cta-button">Join Now</button>
        </div>
      </section>

      {/* How Does it Work Section */}
      <section className="how-it-works">
        <h2 className="how-it-works-title">How Does It Work?</h2>
        <p className="how-it-works-subtitle">You’re Just 3 Steps Away From A Great Date</p>

        <div className="steps-container">
          {/* Step 1 */}
          <div className="step">
            <img src={createProfileImage} alt="Create Profile" className="step-image" />
            <div className="step-text">
              <h3>Create Profile</h3>
              <p>Join the Community: Build Your Profile and Discover a World of Connections</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="step">
            <img src={connectImage} alt="Connect" className="step-image" />
            <div className="step-text">
              <h3>Connect</h3>
              <p>Expand Your Social Horizons: Forge Meaningful Connections with New Faces!</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="step">
            <img src={startDatingImage} alt="Start Dating" className="step-image" />
            <div className="step-text">
              <h3>Start Dating</h3>
              <p>Love Begins Here: Your Journey to Happily Ever After Starts Now</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
