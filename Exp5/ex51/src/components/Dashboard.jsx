import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Dashboard.css";

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

export default Dashboard;