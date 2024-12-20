import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import '../signIn/signin.css'; // Ensure the correct path for the stylesheet

// Import images
import logoImage from '../../assets/logo.png'; // Use the same logo image
import backgroundImage from '../../assets/about1.jpg'; // Background image for the sign-in page

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, form data would be sent to a server or API
    console.log('Form Data Submitted:', formData);
    alert('You are signed in!');
    setFormData({ name: '', email: '' }); // Reset form after submission
  };

  // Define animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <div className="signin-page">
      {/* Header Section with full background image */}
      <header
        className="header"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', // Full height for header with background image
          display: 'flex',
          justifyContent: 'center', // Center content horizontally
          alignItems: 'center', // Center content vertically
        }}
      >
        <div className="overlay">
          <div className="content text-center">
            <div className="top-right-nav">
              <nav className="top-right-nav">
                <a href="/" className="nav-link">Home</a> {/* Home Button */}
                <a href="/about-us" className="nav-link">About</a>
                <a href="/contact-us" className="nav-link">Contact</a>
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
              Sign In
            </motion.h1>
          </div>
        </div>
        {/* Sign-In Form Card */}
        <div className="signin-card-wrapper">
          <div className="signin-card">
            <form onSubmit={handleSubmit} className="signin-form">
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

              <button type="submit" className="submit-btn">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SignIn;
