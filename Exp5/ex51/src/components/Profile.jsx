import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Profile.css";

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

export default Profile;