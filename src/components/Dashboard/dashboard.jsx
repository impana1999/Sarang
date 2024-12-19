import React, { useState, useEffect } from 'react';
import '../Dashboard/dashbard.css'; // Ensure the correct path for the stylesheet

// Import images
import logoImage from '../../assets/logo.png';
import backgroundImage1 from '../../assets/backgroundimage9.jpeg';
import backgroundImage2 from '../../assets/backgroundimage8.jpg';
import backgroundImage3 from '../../assets/backgroundimage4.jpg';
import leftImage from '../../assets/backgroundimage6.jpg';
import createProfileImage from '../../assets/phone.png';
import connectImage from '../../assets/dating.png';
import startDatingImage from '../../assets/kiss.png';
import journeyImage from '../../assets/kiss.png'; // New image for "Start Your Journey with Us"

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

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      {/* Header Section */}
      <header className="header" style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}>
        <div className="overlay">
          <div className="content">
            <div className="top-right-nav">
              <nav>
                <a href="/about-us" className="nav-link">About Us</a>
                <a href="/contact-us" className="nav-link">Contact Us</a>
                <a href="/sign-up" className="nav-link">Sign Up</a>
              </nav>
            </div>

            <div className="logo-container">
              <img src={logoImage} alt="Logo" className="logo" />
              <span className="logo-text">Sarang</span>
            </div>

            <h1 className="title">Diversity Unites Us, Love Defines Us</h1>
            <p className="subtitle">Connecting hearts and minds in a vibrant community.</p>
            <button className="cta-button">Learn More</button>
          </div>
        </div>
      </header>

      {/* Second Section with Left and Right Columns */}
      <section className="split-section">
        <div className="left-column">
          <img src={leftImage} alt="Left Section Image" className="left-image" />
        </div>

        <div className="right-column">
          <h2 className="section-title">Find Your Perfect Match</h2>
          <p className="section-text">
            Join a community of like-minded individuals looking to connect. 
            Our platform offers easy-to-use tools to meet people and start meaningful conversations.
          </p>
          <button className="cta-button">Join Now</button>
        </div>
      </section>

      {/* Third Section: Start Your Journey */}
      <section className="start-your-journey">
        <h2 className="journey-title">Start Your Journey with Us</h2>
        <div className="journey-content">
          <img src={journeyImage} alt="Journey" className="journey-image" />
          <p className="journey-text">Begin your adventure with Sarang today. A world of connections is waiting for you. Join now and meet incredible people.</p>
        </div>
      </section>

      {/* Modified How Does it Work Section */}
      <section className="how-it-works">
        <h2 className="how-it-works-title">How Does It Work?</h2>
        <p className="how-it-works-subtitle">You’re Just 3 Steps Away From A Great Date</p>

        <div className="steps-container row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card step-card">
              <img src={createProfileImage} className="card-img-top step-image" alt="Create Profile" />
              <div className="card-body">
                <h5 className="card-title">Create Profile</h5>
                <p className="card-text">Join the Community: Build Your Profile and Discover a World of Connections</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card step-card">
              <img src={connectImage} className="card-img-top step-image" alt="Connect" />
              <div className="card-body">
                <h5 className="card-title">Connect</h5>
                <p className="card-text">Expand Your Social Horizons: Forge Meaningful Connections with New Faces!</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card step-card">
              <img src={startDatingImage} className="card-img-top step-image" alt="Start Dating" />
              <div className="card-body">
                <h5 className="card-title">Start Dating</h5>
                <p className="card-text">Love Begins Here: Your Journey to Happily Ever After Starts Now</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
