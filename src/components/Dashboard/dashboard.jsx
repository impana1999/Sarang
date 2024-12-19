import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from framer-motion
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
import journeyImage from '../../assets/relationships.png'; // New image for "Start Your Journey with Us"

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

  // Define animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="dashboard">
      {/* Header Section */}
      <header
        className="header"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        }}
      >
        <div className="overlay">
          <div className="content text-center">
            <div className="top-right-nav ">
              <nav className="top-right-nav " > 
                <a href="/about-us" className="nav-link">About</a>
                <a href="/contact-us" className="nav-link">Contact</a>
                <a href="/sign-up" className="nav-link">SignIn</a>
              </nav>
            </div>
            <div className="logo-container position-absolute">
              <img src={logoImage} alt="Logo" className="logo" />
              <span className="logo-text">Sarang</span>
            </div>

            {/* Apply motion only on text (visible once on page load) */}
            <motion.h1
              className="title"
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              viewport={{ once: true }}
            >
              Diversity Unites Us, Love Defines Us
            </motion.h1>

            <motion.p
              className="subtitle"
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              viewport={{ once: true }}
            >
              Connecting hearts and minds in a vibrant community.
            </motion.p>
            <button className="cta-button">Learn More</button>
          </div>
        </div>
      </header>

      {/* Second Section with Left and Right Columns */}
      <section className="split-section container-fluid">
        <motion.div
          className="row align-items-center"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true }}
        >
          <div className="col-lg-6 col-md-12 mb-4">
            <img src={leftImage} alt="Left Section Image" className="left-image img-fluid" />
          </div>

          <div className="col-lg-6 col-md-12 mb-4">
            <motion.h2
              className="section-title"
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              viewport={{ once: true }}
            >
              Find Your Perfect Match
            </motion.h2>
            <motion.p
              className="section-text"
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              viewport={{ once: true }}
            >
              Join a community of like-minded individuals looking to connect. 
              Our platform offers easy-to-use tools to meet people and start meaningful conversations.
            </motion.p>
            <button className="cta-button">Join Now</button>
          </div>
        </motion.div>
      </section>

      {/* Third Section: Start Your Journey */}
      <section className="start-your-journey text-center">
        <motion.h2
          className="journey-title"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true }}
        >
          Start Your Journey with Us
        </motion.h2>
        <div className="journey-content d-flex justify-content-center align-items-center flex-column">
          <img src={journeyImage} alt="Journey" className="journey-image" />
          <motion.p
            className="journey-text"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
          >
            Begin your adventure with Sarang today. A world of connections is waiting for you. Join now and meet incredible people.
          </motion.p>
        </div>
      </section>

      {/* How Does it Work Section (Bootstrap grid) */}
      {/* How Does it Work Section */}
<section className="how-it-works py-5">
  <motion.h2
    className="how-it-works-title text-center"
    initial="hidden"
    whileInView="visible"
    variants={textVariants}
    viewport={{ once: true }}
  >
    How Does It Work?
  </motion.h2>
  <motion.p
    className="how-it-works-subtitle text-center"
    initial="hidden"
    whileInView="visible"
    variants={textVariants}
    viewport={{ once: true }}
  >
    You’re Just 3 Steps Away From A Great Date
  </motion.p>

  <div className="steps-container row justify-content-center">
    {/* Motion-enabled step cards */}
    {[
      {
        img: createProfileImage,
        title: "Create Profile",
        text: "Join the Community: Build Your Profile and Discover a World of Connections",
      },
      {
        img: connectImage,
        title: "Connect",
        text: "Expand Your Social Horizons: Forge Meaningful Connections with New Faces!",
      },
      {
        img: startDatingImage,
        title: "Start Dating",
        text: "Love Begins Here: Your Journey to Happily Ever After Starts Now",
      },
    ].map((step, index) => (
      <motion.div
        key={index}
        className="col-lg-4 col-md-6 mb-4"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
        }}
        viewport={{ once: true }}
      >
        <div className="card step-card">
          <img src={step.img} className="card-img-top step-image" alt={step.title} />
          <div className="card-body">
            <h5 className="card-title">{step.title}</h5>
            <p className="card-text">{step.text}</p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>

<section className="footer-header">
  <motion.div
    className="footer-content"
    initial="hidden"
    whileInView="visible"
    variants={textVariants}
    viewport={{ once: true }}
  >
    <div className="footer-title">
      Welcome Again from Sarang
    </div>

    <div className="journey-content">
      <div className="logo-container-bottom">
        <img src={logoImage} alt="Logo" className="logo-bottom" />
        <span className="logo-text-bottom">Sarang</span>
      </div>
    </div>

    {/* Scroll to Top Button */}
    <button className="scroll-to-top" onClick={scrollToTop}>
      ^
    </button>
  </motion.div>
</section>

    </div>
  );
};

export default Dashboard;
