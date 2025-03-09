import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import '../contactus/contact.css'; // Ensure the correct path for the stylesheet

// Import images
import logoImage from '../../assets/logo.png'; // Use the same logo image
import backgroundImage1 from '../../assets/about1.jpg'; // You can use any background image

const Contact = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Update background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  },  [backgroundImages.length]);

  const backgroundImages = [
    backgroundImage1,
    // You can add more images if needed.
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, form data would be sent to a server or API
    console.log('Form Data Submitted:', formData);
    alert('Your query has been submitted!');
    setFormData({ name: '', email: '', query: '' }); // Reset form after submission
  };

  // Define animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <header
        className="header"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh',
        }}
      >
        <div className="overlay">
          <div className="content text-center">
            <div className="top-right-nav">
              <nav className="top-right-nav">
                <a href="/" className="nav-link">Home</a> {/* Home Button */}
                <a href="/about-us" className="nav-link">About</a>
                <a href="/sign-up" className="nav-link">SignIn</a>
              </nav>
            </div>
            <div className="logo-container position-absolute">
              <img src={logoImage} alt="Logo" className="logo" />
              <span className="logo-text" style={{ color: 'white' }}>Sarang</span>
            </div>

            <motion.h1
              className="title"
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              viewport={{ once: true }}
              style={{ color: 'white' }}
            >
              Contact Us
            </motion.h1>
          </div>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container text-center">
          <motion.h2
            className="contact-title"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
          >
            We'd Love to Hear From You!
          </motion.h2>

          <div className="contact-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <motion.div
                className="form-group"
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                viewport={{ once: true }}
              >
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </motion.div>

              <motion.div
                className="form-group"
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                viewport={{ once: true }}
              >
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </motion.div>

              <motion.div
                className="form-group"
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                viewport={{ once: true }}
              >
                <label htmlFor="query">Query</label>
                <textarea
                  id="query"
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  placeholder="Enter your query"
                  required
                ></textarea>
              </motion.div>

              <button type="submit" className="submit-btn">
                Submit Query
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Section with background */}
    
    </div>
  );
};

export default Contact;
