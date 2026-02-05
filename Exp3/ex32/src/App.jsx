import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Profile() {
  return (
    <div className="card profile-card landscape">
      <div className="profile-image">
        <img src="ayus.jpg" alt="Profile" />
      </div>

      <div className="profile-details">
        <h1>Profile</h1>
        <p><strong>Name:</strong> Aayush Dhar</p>
        <p><strong>Email:</strong> aayushdhar2005@gmail.com</p>
        <p><strong>Phone:</strong> 9810919421</p>
      </div>

      <div className="projects profile-details">
        <h1>Projects</h1>
        <p><strong>1. AI-based Patient Diagnosis Supoprt System And Medicine Recommendation</strong></p>
        <p><strong>2. Innovative Shoes For Climbing Stairs</strong></p>
      </div>

    </div>
  );
}

function Dashboard() {
  const skills = ["C++", "Python", "React", "JavaScript", "HTML", "CSS"];

  return (
    <div className="card dashboard-card">
      <h1>Skills Dashboard</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">

        <nav className="navbar">
          <div className="navbar-inner">
            <Link to="/" className="nav-button">My Portfolio</Link>

            <div className="nav-links">
              <Link to="/" className="nav-button">Profile</Link>
              <Link to="/dashboard" className="nav-button">Dashboard</Link>
            </div>
          </div>
        </nav>

        <main className="app-content">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;