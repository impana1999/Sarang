import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginWithGoogle } from '../../redux/Slice/authSlice';
import '../signIn/signin.css';

// Import images
import google from '../../assets/google.png';
import logo from '../../assets/logo.png'; // Add your logo path
import backgroundImage from '../../assets/about1.jpg';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('You are signed in!');
    setFormData({ email: '', password: '' });
  };

  const handleGoogleLogin = async () => {
    const resultAction = await dispatch(loginWithGoogle());
    if (loginWithGoogle.fulfilled.match(resultAction)) {
      const user = resultAction?.payload?.user;
      localStorage.setItem('username', user?.name);
      localStorage.setItem('Email', user?.email);
      localStorage.setItem('userId', user?._id);
      navigate('/Feed', { replace: true });
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <div className="signin-page">
      <header
        className="header"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="overlay">
          {/* Top Navigation */}
          <div className="top-right-nav">
            <a href="/" className="nav-link">Home</a>
            <a href="/about-us" className="nav-link">About</a>
            <a href="/contact-us" className="nav-link">Contact</a>
          </div>

          {/* Logo and Title */}
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="title">Sarang</h1>
          </div>

          {/* Sign-In Card */}
          <div className="signin-card-wrapper">
            <div className="signin-card">
              <motion.h2
                className="signin-title"
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
              >
                Sign In
              </motion.h2>

              {/* Regular Login Form */}
              <form onSubmit={handleSubmit} className="signin-form">
                <motion.div
                  className="form-group"
                  initial="hidden"
                  whileInView="visible"
                  variants={textVariants}
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
                >
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                </motion.div>

                <button type="submit" className="submit-btn">
                  Sign In
                </button>
              </form>

              {/* Google Login Button */}
              <div className="google-login-container">
                <button onClick={handleGoogleLogin} className="google-login-btn">
                  <img src={google} alt="Google logo" className="google-logo" />
                  <span>Sign in with Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SignIn;
