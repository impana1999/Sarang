import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary modules from react-router-dom
import Header from './components/Dashboard/dashboard'; // Import Header (Dashboard) component
import About from './components/aboutus/aboutus'; // Import About component
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
