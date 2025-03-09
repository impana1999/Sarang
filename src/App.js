import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary modules from react-router-dom
import Header from './components/Dashboard/dashboard'; // Import Header (Dashboard) component
import About from './components/aboutus/aboutus'; // Import About component
import Contact from './components/contactus/contact'; // Import About component
import SignIn from './components/signIn/signin'; // Import About component
import Feed from './components/feed/feed'
import './App.css'; // Import your stylesheet

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define the routes */}
        <Routes>
          {/* Route for Dashboard (Header) */}
          <Route path="/" element={<Header />} />
          
          {/* Route for About page */}
          <Route path="/about-us" element={<About />} />
          
          {/* Route for About page */}
          <Route path="/contact-us" element={<Contact />} />
         {/* Route for About page */}
         <Route path="/sign-up" element={<SignIn />} />
          
         <Route path="/Feed" element={<Feed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
