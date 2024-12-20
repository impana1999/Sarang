import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import '../aboutus/aboutus.css'; // Ensure the correct path for the stylesheet

// Import images
import logoImage from '../../assets/logo.png'; // Use the same logo image
import backgroundImage1 from '../../assets/about1.jpg'; // Just as an example, you can use any background

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Update background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const backgroundImages = [
    backgroundImage1,
    // You can add more images if needed.
  ];

  // Define animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <div className="about-page">
      {/* Header Section */}
      <header
        className="header"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        }}
      >
        <div className="overlay">
          <div className="content text-center">
            <div className="top-right-nav">
              <nav className="top-right-nav">
                <a href="/about-us" className="nav-link">About</a>
                <a href="/contact-us" className="nav-link">Contact</a>
                <a href="/sign-up" className="nav-link">SignIn</a>
              </nav>
            </div>
            <div className="logo-container position-absolute">
              <img src={logoImage} alt="Logo" className="logo" />
              <span className="logo-text">Sarang</span>
            </div>

            <motion.h1
              className="title"
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              viewport={{ once: true }}
            >
              About Us
            </motion.h1>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about-us-section">
        <div className="container text-center">
          <motion.h2
            className="about-title"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
          >
            Who We Are
          </motion.h2>
          <motion.p
            className="about-text"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
          >
            Sarang is a dynamic and inclusive online community that aims to foster meaningful connections. 
            Our platform allows people to engage with like-minded individuals, share their passions, 
            and explore new relationships in a safe and welcoming environment.
          </motion.p>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="additional-info">
        <div className="container text-center">
          <motion.h2
            className="info-title"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
          >
            Why Choose Sarang?
          </motion.h2>
          <motion.p
            className="info-text"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
          >
            Sarang brings people together through a platform built on trust, mutual respect, and shared values. 
            Whether you're looking for friendship, love, or anything in between, Sarang is the place to begin your journey. 
            Join us today and be a part of a growing community that embraces diversity and connection.
          </motion.p>
        </div>
      </section>

    </div>
  );
};

export default About;
